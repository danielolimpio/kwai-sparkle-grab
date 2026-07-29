import { FacebookIcon, YoutubeIcon, InstagramIcon, TiktokIcon, XIcon } from "@/components/BrandIcons";

export interface PlatformConfig {
  slug: string;
  key: "facebook" | "youtube" | "instagram" | "tiktok" | "twitter";
  name: string;
  label: string;
  url: string;
  icon: typeof FacebookIcon;
  color: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  bullets: string[];
  steps: string[];
  faq: { question: string; answer: string }[];
}

export const PLATFORMS: PlatformConfig[] = [
  {
    slug: "/baixar-videos-facebook",
    key: "facebook",
    name: "Facebook",
    label: "Baixar Vídeos Facebook",
    url: "https://baixarvideosfacebook.com",
    icon: FacebookIcon,
    color: "#1877F2",
    title: "Baixar Vídeos do Facebook Grátis e em HD",
    description:
      "Baixar vídeos do Facebook online, grátis e em HD. Salve vídeos e reels do Facebook por link, sem instalar programas — direto no navegador do celular ou PC.",
    h1: "Baixar Vídeos do Facebook",
    intro:
      "Além de baixar vídeos do Kwai, você pode salvar vídeos e reels do Facebook em alta qualidade usando o nosso baixador dedicado. É grátis, online e funciona em Android, iPhone e computador — basta colar o link do vídeo.",
    bullets: [
      "Download de vídeos e reels do Facebook em HD e Full HD",
      "Funciona em Android, iPhone, tablet e PC pelo navegador",
      "Sem instalar aplicativo, sem cadastro e sem limite diário",
      "Converta o vídeo do Facebook em MP4 pronto para salvar",
    ],
    steps: [
      "Copie o link do vídeo do Facebook (opção 'Copiar link' no menu do vídeo).",
      "Abra o baixador de vídeos do Facebook clicando no botão desta página.",
      "Cole o link, toque em baixar e escolha a qualidade desejada.",
    ],
    faq: [
      { question: "Como baixar vídeo do Facebook no celular?", answer: "Copie o link do vídeo pelo app do Facebook, abra o baixador de vídeos do Facebook no navegador, cole o link e toque em baixar. O vídeo é salvo em MP4 na galeria do Android ou nos arquivos do iPhone." },
      { question: "É possível baixar vídeo do Facebook em HD?", answer: "Sim. O baixador oferece a melhor resolução disponível no vídeo original, incluindo HD e Full HD quando o vídeo foi publicado nessa qualidade." },
      { question: "Baixar vídeo do Facebook é grátis?", answer: "Sim, o serviço é 100% gratuito, sem cadastro e sem limite de downloads." },
      { question: "Dá para baixar vídeos privados do Facebook?", answer: "Não. Só é possível baixar vídeos públicos. Respeite sempre os direitos autorais e a privacidade de terceiros." },
    ],
  },
  {
    slug: "/baixar-videos-youtube",
    key: "youtube",
    name: "YouTube",
    label: "Baixar Vídeos YouTube",
    url: "https://baixarvideoyoutube.com",
    icon: YoutubeIcon,
    color: "#FF0000",
    title: "Baixar Vídeos do YouTube Online e Grátis",
    description:
      "Baixar vídeos do YouTube online em MP4 e alta qualidade. Baixador de vídeos do YouTube grátis, sem programas, funcionando no celular e no PC.",
    h1: "Baixar Vídeos do YouTube",
    intro:
      "Salve vídeos do YouTube em MP4 com qualidade original usando o nosso baixador dedicado ao YouTube. Sem instalar programas, sem cadastro e direto pelo navegador — ideal para assistir offline no celular ou no computador.",
    bullets: [
      "Download de vídeos do YouTube em MP4 até a maior resolução disponível",
      "Funciona com vídeos longos, YouTube Shorts e playlists públicas",
      "Compatível com Android, iPhone, Windows, macOS e Linux",
      "Grátis, ilimitado e sem instalar extensão nem software",
    ],
    steps: [
      "Copie o link do vídeo do YouTube na barra de endereço ou no botão Compartilhar.",
      "Abra o baixador de vídeos do YouTube clicando no botão desta página.",
      "Cole o link, escolha a qualidade e baixe o arquivo MP4.",
    ],
    faq: [
      { question: "Como baixar vídeo do YouTube sem programa?", answer: "Use um baixador online: copie o link do vídeo, cole no site e escolha a qualidade. Não é necessário instalar programas nem extensões." },
      { question: "Dá para baixar YouTube Shorts?", answer: "Sim. O processo é o mesmo: copie o link do Short e cole no baixador para salvar em MP4." },
      { question: "Qual a melhor qualidade disponível?", answer: "O baixador entrega a maior resolução publicada pelo criador, normalmente 720p, 1080p ou superior." },
      { question: "Posso baixar qualquer vídeo do YouTube?", answer: "Baixe apenas conteúdos públicos e para uso pessoal. Conteúdos protegidos por direitos autorais não devem ser redistribuídos." },
    ],
  },
  {
    slug: "/baixar-videos-instagram",
    key: "instagram",
    name: "Instagram",
    label: "Baixar Vídeos Instagram",
    url: "https://baixarvideosinstagram.com",
    icon: InstagramIcon,
    color: "#E1306C",
    title: "Baixar Vídeos do Instagram, Reels e Stories",
    description:
      "Baixar vídeos do Instagram, reels e stories em HD e sem marca d'água. Baixador de Instagram online, grátis, no celular ou no PC, sem instalar nada.",
    h1: "Baixar Vídeos do Instagram",
    intro:
      "Baixe reels, vídeos do feed, stories e fotos do Instagram em alta qualidade com o nosso baixador dedicado. Tudo online, grátis e sem precisar fazer login na sua conta.",
    bullets: [
      "Download de reels, vídeos do feed, stories e fotos do Instagram",
      "Reels em HD e sem marca d'água quando disponível",
      "Sem login, sem app e sem limite de downloads",
      "Funciona em Android, iPhone e computador",
    ],
    steps: [
      "Copie o link do reel, vídeo ou story no app do Instagram.",
      "Abra o baixador de vídeos do Instagram clicando no botão desta página.",
      "Cole o link e baixe o arquivo em MP4 ou JPG.",
    ],
    faq: [
      { question: "Como baixar reels do Instagram sem marca d'água?", answer: "Copie o link do reel, cole no baixador de Instagram e escolha a opção de download em HD. O arquivo é entregue na melhor qualidade disponível." },
      { question: "Dá para baixar stories do Instagram?", answer: "Sim, stories públicos podem ser baixados colando o link do perfil ou do story no baixador." },
      { question: "Preciso fazer login na minha conta?", answer: "Não. O baixador não pede login nem senha — nunca informe suas credenciais em sites de terceiros." },
      { question: "Funciona no iPhone?", answer: "Sim. No iPhone o arquivo é salvo pelo app Arquivos e depois pode ser movido para a galeria." },
    ],
  },
  {
    slug: "/baixar-videos-tiktok",
    key: "tiktok",
    name: "TikTok",
    label: "Baixar Vídeos TikTok",
    url: "https://baixarvideostiktok.com",
    icon: TiktokIcon,
    color: "#000000",
    title: "Baixar Vídeos do TikTok Sem Marca d'Água",
    description:
      "Baixar vídeos do TikTok sem marca d'água em HD, grátis e online. Baixador de TikTok por link, no celular ou PC, sem app e sem cadastro.",
    h1: "Baixar Vídeos do TikTok",
    intro:
      "Salve vídeos do TikTok sem marca d'água e em alta definição com o nosso baixador dedicado. É a mesma experiência do KwaiSave, agora para o TikTok: cole o link e baixe em segundos.",
    bullets: [
      "Vídeos do TikTok sem marca d'água em HD",
      "Opção de baixar somente o áudio em MP3",
      "Grátis, ilimitado, sem app e sem cadastro",
      "Compatível com Android, iPhone e computador",
    ],
    steps: [
      "Toque em Compartilhar no TikTok e copie o link do vídeo.",
      "Abra o baixador de vídeos do TikTok clicando no botão desta página.",
      "Cole o link e escolha baixar sem marca d'água.",
    ],
    faq: [
      { question: "Como baixar vídeo do TikTok sem marca d'água?", answer: "Copie o link pelo botão Compartilhar do TikTok, cole no baixador e selecione a opção sem marca d'água. O vídeo é salvo em MP4 limpo." },
      { question: "Dá para baixar só o áudio do TikTok?", answer: "Sim, o baixador oferece a extração do áudio em MP3 além do vídeo em MP4." },
      { question: "É seguro e gratuito?", answer: "Sim. O download é gratuito, não exige cadastro e não pede acesso à sua conta do TikTok." },
      { question: "Funciona com vídeos longos do TikTok?", answer: "Sim, vídeos curtos e longos públicos podem ser baixados normalmente." },
    ],
  },
  {
    slug: "/baixar-videos-twitter",
    key: "twitter",
    name: "Twitter / X",
    label: "Baixar Vídeos Twitter",
    url: "https://baixarvideostwitter.com",
    icon: XIcon,
    color: "#0F1419",
    title: "Baixar Vídeos do Twitter (X) em HD",
    description:
      "Baixar vídeos do Twitter (X) online e grátis em MP4. Baixador de vídeos do X por link, em HD, no celular ou no PC, sem instalar nada.",
    h1: "Baixar Vídeos do Twitter (X)",
    intro:
      "Baixe vídeos e GIFs publicados no Twitter (X) em MP4 e alta qualidade usando o nosso baixador dedicado. Cole o link do tweet e salve o vídeo em segundos, sem programas.",
    bullets: [
      "Download de vídeos e GIFs do Twitter (X) em MP4",
      "Escolha entre as qualidades disponíveis, incluindo HD",
      "Sem login, sem app e sem limite de downloads",
      "Funciona em Android, iPhone e computador",
    ],
    steps: [
      "Copie o link do tweet que contém o vídeo.",
      "Abra o baixador de vídeos do Twitter clicando no botão desta página.",
      "Cole o link e baixe o vídeo na qualidade desejada.",
    ],
    faq: [
      { question: "Como baixar vídeo do Twitter (X) no celular?", answer: "Copie o link do tweet pelo botão de compartilhamento, cole no baixador de vídeos do Twitter e escolha a qualidade para salvar em MP4." },
      { question: "Dá para baixar GIF do Twitter?", answer: "Sim. GIFs do X são entregues como vídeo MP4, formato compatível com qualquer aparelho." },
      { question: "Precisa de conta no X?", answer: "Não. O baixador funciona apenas com o link público do tweet." },
      { question: "O download é gratuito?", answer: "Sim, é totalmente gratuito e sem limite de uso." },
    ],
  },
];

export const PLATFORM_SLUGS = PLATFORMS.map((p) => p.slug);
