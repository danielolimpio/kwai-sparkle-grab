## Objetivo
Internacionalizar o KwaiSave em 5 idiomas para capturar tráfego global do Kwai, com URLs prefixadas, seletor de bandeiras no cabeçalho e redirecionamento automático por idioma do navegador.

## Estrutura de rotas
- `/` → detecta `navigator.language` e redireciona para o prefixo correto (EN é fallback).
- `/en/...` → Inglês (default global, Sudeste Asiático, resto do mundo).
- `/pt/...` → Português BR.
- `/es/...` → Espanhol neutro (LATAM).
- `/ar/...` → Árabe padrão moderno (com `dir="rtl"`).
- `/fr/...` → Francês (Marrocos, Argélia, França).
- Rotas legadas sem prefixo (`/termos-de-uso`, `/sobre`, etc.) → 301 client-side para `/pt/...` preservando o ranking atual em PT.

## Sistema i18n
1. Instalar `react-i18next` + `i18next` + `i18next-browser-languagedetector`.
2. Criar `src/i18n/index.ts` com config dos 5 idiomas e detector.
3. Criar bundles de tradução em `src/i18n/locales/{pt,es,ar,fr,en}.json` contendo:
   - SEO (title, description, H1, keywords por idioma)
   - Hero, FeatureCards, HowItWorks, SupportedFormats
   - FAQ (8 perguntas traduzidas com keywords locais)
   - SEOContentBlock (texto longo otimizado por idioma)
   - Sidebar, Footer, Header (todos os labels de menu)
   - Páginas institucionais (Termos, Privacidade, DMCA, Sobre, Blog, FAQPage, Downloads, UsoResponsavel, BaixarTutorial, KwaiAPK, Contato)
   - Disclaimers e CTAs
4. Keywords pesquisadas por idioma:
   - **EN**: download kwai, kwai downloader no watermark, kwai to mp4, save kwai video
   - **ES**: descargar kwai, descargar videos kwai sin marca de agua, kwai descargar
   - **AR**: تحميل كواي, تنزيل فيديو كواي بدون علامة مائية, كواي تحميل
   - **FR**: télécharger kwai, télécharger vidéo kwai sans filigrane, kwai téléchargeur
   - **PT**: mantém as atuais (baixar vídeo kwai sem marca d'água, etc.)

## Seletor de idioma (cabeçalho)
- Novo componente `LanguageSwitcher.tsx` no `AppHeader`.
- Dropdown com 5 bandeiras emoji + nome do idioma: 🇧🇷 Português · 🇺🇸 English · 🇪🇸 Español · 🇸🇦 العربية · 🇫🇷 Français.
- Ao trocar: navega para o mesmo path com novo prefixo + salva preferência em `localStorage`.
- Mobile: ícone de globo abre bottom sheet com as 5 opções.

## SEO multilingual
- `SEOHead` passa a receber idioma atual e gera:
  - `<html lang="...">` dinâmico (e `dir="rtl"` para árabe).
  - `<link rel="alternate" hreflang="...">` para todas as 5 versões + `x-default` apontando para `/en/`.
  - Canonical com prefixo correto.
  - Title/description/keywords do bundle de tradução correto.
- Atualizar `public/sitemap.xml` com todas as URLs nos 5 idiomas e `<xhtml:link rel="alternate" hreflang="...">` em cada `<url>`.
- Atualizar `public/robots.txt` para listar o novo sitemap.

## Detecção automática em `/`
- Componente `LanguageRedirect.tsx` na rota `/`:
  1. Checa `localStorage.lang` (preferência salva).
  2. Senão, checa `navigator.language` → mapeia `pt*` → `/pt/`, `es*` → `/es/`, `ar*` → `/ar/`, `fr*` → `/fr/`, demais → `/en/`.
  3. Faz `Navigate replace` para o destino.

## Suporte RTL (Árabe)
- Quando idioma = `ar`, aplicar `document.documentElement.dir = "rtl"`.
- Sidebar fica à direita em RTL (via classe condicional).
- Ajustar margins/paddings com classes `rtl:`.

## Arquivos a criar
- `src/i18n/index.ts`
- `src/i18n/locales/pt.json`, `en.json`, `es.json`, `ar.json`, `fr.json`
- `src/components/LanguageSwitcher.tsx`
- `src/components/LanguageRedirect.tsx`
- `src/hooks/use-current-language.ts`

## Arquivos a modificar
- `src/App.tsx` — nested routes com prefixo `:lang`, redirect na raiz, legacy redirects.
- `src/main.tsx` — importar config i18n.
- `index.html` — remover meta keywords PT-only (vai por Helmet), ajustar lang dinâmico.
- `src/components/SEOHead.tsx` — gerar hreflang correto + canonical prefixado.
- `src/components/AppHeader.tsx`, `AppSidebar.tsx`, `AppFooter.tsx` — usar `t()` + LanguageSwitcher.
- Todos os componentes de conteúdo (Hero, FAQ, FeatureCards, HowItWorks, SupportedFormats, SEOContentBlock, ContentTabs, RelatedLinks, VideoCard) — substituir strings hardcoded por `t()`.
- Todas as páginas (`pages/*.tsx`) — usar `t()` + ajustar SEOHead com canonical prefixado.
- `public/sitemap.xml` — regenerar com 5 idiomas × N rotas + hreflang.
- `scripts/generate-sitemap.ts` — atualizar para multi-idioma.

## Detalhes técnicos
- `react-i18next` carrega bundles via `import` (não fetch) para zero latência.
- Idioma do `useParams<{ lang: string }>()` valida contra whitelist; inválido → 404 ou redirect para `/en/`.
- Para árabe: usar fonte que suporte caracteres árabes (Montserrat não tem — adicionar `Noto Sans Arabic` como fallback).
- localStorage do histórico de downloads continua global (não muda por idioma).

## Risco e mitigação
- **Risco SEO**: as URLs em PT atuais (`/`, `/sobre`, etc.) já ranqueiam. Mover tudo para `/pt/` pode causar queda temporária.
- **Mitigação**: redirect 301 client-side (`<Navigate replace>`) das URLs antigas para `/pt/...`, hreflang corretos, sitemap atualizado e enviado ao Search Console manualmente após o deploy.

## Tamanho
Esta é uma intervenção grande: ~20 arquivos modificados + 5 novos bundles JSON de tradução (cada ~400 linhas com todas as strings do site). Vai gerar uma quantidade significativa de código.

## Pergunta antes de executar
Confirma que posso prosseguir com tudo isso de uma vez? É um trabalho extenso e vai gerar muitos arquivos novos. Se preferir, posso fazer em duas fases: **(1)** infra de i18n + seletor de bandeiras + tradução da Home/SEO agora; **(2)** tradução das páginas institucionais depois. Diz o que prefere.
