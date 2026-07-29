# KwaiSave Download

Build a complete Kwai video downloader web application for the domain "baixarvideoskwai.com" with a modern layout inspired by Kwai's design, using Kwai's brand colors and Portuguese (Brazil) language.

## DESIGN SPECIFICATIONS:

### Color Palette (Kwai Brand Colors):
- Kwai Primary Orange: #FF5A1F (primary buttons, accents)
- Kwai Vibrant Red: #FF2500 (highlights, CTAs)
- Kwai Orange Gradient: linear-gradient(135deg, #FF2500, #FF5A1F, #FF8938)
- Kwai Light Orange: #FFC39D (subtle accents)
- Kwai Peach: #FF985F (secondary elements)
- White: #FFFFFF (main background)
- Light Gray: #F5F5F5 (page background)
- Border Gray: #E0E0E0 (borders, dividers)
- Text Black: #1A1A1A (primary text)
- Text Gray: #666666 (secondary text)
- Success Green: #00C853 (success states)
- Error Red: #FF1744 (error states)
- Dark: #121212 (for dark mode)

### Layout Structure:

**1. LEFT SIDEBAR (Fixed, 280px width, White #FFFFFF with border-right #E0E0E0):**
- Logo at top: "KwaiSave" or "Baixar Kwai" with Kwai-style play icon using orange gradient
- Navigation menu items (black text, orange gradient on hover):
  • Home (icon: house, active state with gradient background)
  • Vídeos (icon: video/play)
  • Shorts (icon: clapperboard)
  • Lives (icon: broadcast/circle)
  • Fotos (icon: image/photo)
  • Downloads (icon: download arrow)
  • Settings (icon: gear)
- Bottom section: App version or language selector
- Smooth hover effects with Kwai orange gradient

**2. MAIN CONTENT AREA (Light Gray background #F5F5F5):**

**Header Section:**
- Top bar with minimal height (60px)
- White background with border-bottom #E0E0E0
- Logo centered or left-aligned
- Right side: notification bell icon and help button

**Hero Section:**
- Large heading: "Baixar Vídeos do Kwai Sem Marca d'Água" (bold, black text, 36px, centered)
- Subheading: "Baixe vídeos, Shorts e lives do Kwai em alta qualidade. Sem logo, rápido e 100% grátis!" (gray text, 16px, centered)
- Text alignment: center

**URL Input Section (Center of page):**
- Large input field (height: 56px, full width max 700px)
- Placeholder text: "Cole o link do vídeo do Kwai aqui..."
- Left icon: Kwai link icon in orange gradient
- Border: 1px solid #E0E0E0
- Border radius: 12px (rounded, friendly style)
- Background: white
- On focus: border changes to Kwai orange (#FF5A1F)
- Box shadow on focus: 0 0 0 3px rgba(255, 90, 31, 0.2)
- Paste button inside input field (right side) with icon

**Convert Button:**
- Large button with Kwai orange gradient background
- Text: "Baixar" or "Download"
- White text, bold, 16px
- Height: 56px, padding: 0 48px
- Border radius: 12px
- Hover effect: gradient animation or slight scale
- Icon: download arrow
- Box shadow: 0 4px 12px rgba(255, 90, 31, 0.4)

**Content Type Tabs (Below input):**
- Horizontal tabs with rounded design:
  • "Vídeos" (icon: video)
  • "Shorts" (icon: clapperboard)
  • "Lives" (icon: broadcast)
  • "Fotos" (icon: image)
  • "Trends" (icon: fire/trending)
- Active tab with orange gradient background and white text
- Inactive tabs in gray with hover effect

**Features Section (Below input):**
- 4-5 feature cards in a row with Kwai-style icons:
  • "Sem Marca d'Água" (icon: checkmark circle in gradient)
  • "Alta Qualidade" (icon: star in gradient)
  • "Download Ilimitado" (icon: infinity in gradient)
  • "100% Grátis" (icon: gift in gradient)
  • "Super Rápido" (icon: lightning in gradient)
- White cards with subtle shadow, rounded corners (border-radius: 16px)
- Gradient icons, black text below

**3. VIDEO RESULTS SECTION:**

**Section Title:**
- "Resultados" or "Vídeos Encontrados"
- Bold, 24px, black
- Left aligned

**Content Cards (Repeatable component):**
Each card should have Kwai-style design:
- Container: white background, border radius 16px, border 1px solid #E0E0E0
- Top: Content type badge (Vídeo/Short/Live) with orange gradient background
- Left side: Thumbnail (150x150px for square, 150x267px for vertical 9:16)
  • Border radius: 12px
  • Play icon overlay for videos (white with orange shadow)
  • Duration badge on bottom right (black background, white text)
  • "LIVE" badge for live content (red pulsing)
- Middle content:
  • Content title: "Dança viral do momento!" (bold, 16px, black, truncate long text)
  • Author: "@username" with verified badge if applicable (orange checkmark)
  • Stats: "2.5M views • 150K curtidas" (gray, 14px)
  • Posted: "Há 2 dias" (gray, 13px)
- Right side actions:
  • Quality selector dropdown: "MP4 1080p" with Kwai styling
  • Primary download button: "Download" (Kwai Orange #FF5A1F, white text)
  • Alternative buttons: "MP3" (outline), "Capa" (thumbnail download)

**Download Progress States:**
- **Downloading state:**
  • Progress bar with orange gradient filling from left
  • Percentage: "45%" (gradient text)
  • Animated dots or spinner
  • Cancel button (X icon in red circle)
  
- **Completed state:**
  • Green checkmark circle (#00C853)
  • Text: "Concluído" (green text)
  • Download file button with icon
  • Delete button (trash icon)

**4. CONTENT TYPE SECTIONS:**

**Vídeos Section:**
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Video thumbnails with duration overlay
- View count and likes overlay
- Trending badge for popular content

**Shorts Section:**
- Vertical video thumbnails (9:16 aspect ratio)
- Play count and likes overlay
- Music/sound info if available
- Short-form content badge

**Lives Section:**
- Circular "LIVE" indicator (red, pulsing animation)
- Viewer count overlay
- Only downloadable after broadcast ends
- Replay support indicator

**Fotos Section:**
- Square thumbnails with rounded corners
- High resolution download options
- Album/carousel indicator dots
- Original quality badge

**Trends Section:**
- Trending content grid
- Hashtag badges
- View count highlights
- "Em alta" indicator

**5. HOW IT WORKS SECTION:**
- Title: "Como Baixar do Kwai"
- Background: white with border, rounded corners
- 3 steps in columns with Kwai-style numbered circles (orange gradient):
  1. "Cole o link" - Icon: paste/clipboard in gradient circle
  2. "Escolha o formato" - Icon: select/checkbox in gradient circle
  3. "Faça o download" - Icon: download in gradient circle
- Connecting line with orange gradient between steps

**6. SUPPORTED FORMATS SECTION:**
- Title: "O Que Você Pode Baixar"
- Grid of format cards with icons:
  • "Vídeos" - icon + description
  • "Shorts" - icon + description
  • "Lives" - icon + description
  • "Fotos" - icon + description
  • "Áudio/MP3" - icon + description
  • "Capas/Thumbnails" - icon + description
  • "Legendas" - icon + description
  • "Hashtags" - icon + description

**7. FAQ SECTION:**
- Title: "Perguntas Frequentes"
- White cards with border, rounded corners
- Accordion style questions with orange chevron:
  • "É grátis para baixar?"
  • "Preciso fazer login no Kwai?"
  • "Os vídeos baixam sem a logo do Kwai?"
  • "Qual a qualidade dos downloads?"
  • "Funciona em contas privadas?"
  • "É seguro usar?"

**8. FOOTER:**
- White or light gray background
- Top border
- Links: Termos de Uso, Privacidade, DMCA, Contato, Sobre, Blog
- Copyright text: "© 2024 Baixar Vídeos Kwai. Não somos afiliados ao Kwai."
- Social media icons (Kwai, Instagram, TikTok)
- Disclaimer: "Este site não é afiliado, endossado ou patrocinado pelo Kwai ou Kuaishou Technology."

## FUNCTIONAL REQUIREMENTS:

**Input Validation:**
- Validate Kwai URL format (video, short, live, profile links)
- Auto-detect content type from URL
- Show error message if invalid link or private content
- Auto-detect Kwai links from clipboard

**API Integration Points (Using Cobalt Tools - Free & Unlimited):**
- URL input → Cobalt API endpoint to fetch content info
- Display: thumbnail, title, author, duration, views, likes
- Quality options: 
  • Videos: 1080p, 720p, 480p, 360p
  • Photos: Original, High, Medium
  • Audio: MP3 320kbps, 128kbps
- Download progress tracking (0-100%)
- Support for:
  • Single videos
  • Shorts (vertical short-form)
  • Lives (after broadcast)
  • Photos
  • Audio extraction

**Interactive Elements:**
- Smooth transitions on all buttons (0.3s ease)
- Hover effects: scale 1.02, shadow increase
- Loading states with Kwai-style spinning loader (orange gradient)
- Toast notifications for success/error (Kwai style)
- Copy to clipboard functionality
- Preview modal before download
- Share buttons (WhatsApp, Telegram, Kwai)

**Responsive Design:**
- Mobile: sidebar becomes bottom navigation or hamburger menu
- Tablet: 2 columns for content cards
- Desktop: full layout as described
- Breakpoints: 320px, 640px, 768px, 1024px, 1280px+
- Touch-friendly buttons (min 44px)

**Performance:**
- Lazy loading for thumbnails
- Optimized images (WebP format)
- Fast page load (<2 seconds)
- Caching for recent searches
- PWA capabilities

## TEXT CONTENT (Portuguese - Brazil):

**Main Headline:** "Baixar Vídeos do Kwai Sem Marca d'Água"

**Subheadline:** "A melhor ferramenta para baixar vídeos, Shorts e lives do Kwai em alta qualidade, sem a logo do app. Rápido, fácil e 100% grátis!"

**Button Text:** 
- "Baixar Agora"
- "Download"
- "Converter"
- "Copiar Link"
- "Baixar Tudo"
- "MP3"
- "MP4"

**Input Placeholder:** "Cole o link do Kwai aqui..."

**Tab Labels:**
- "Vídeos"
- "Shorts"
- "Lives"
- "Fotos"
- "Trends"

**Success Messages:**
- "Vídeo pronto para download!"
- "Download concluído com sucesso!"
- "Link copiado para a área de transferência!"
- "X arquivos prontos para download!"

**Error Messages:**
- "Link inválido. Verifique e tente novamente."
- "Conteúdo privado. Não é possível baixar de contas privadas."
- "Erro ao processar vídeo. Tente outro link."
- "Conteúdo não encontrado ou removido."
- "Live ainda está em andamento. Tente após o término."

**Labels:**
- "Visualizações"
- "Curtidas"
- "Comentários"
- "Compartilhamentos"
- "Duração"
- "Tamanho"
- "Qualidade"
- "Formato"

## TECHNICAL STACK:

- **Frontend:** React.js with TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React or Heroicons
- **Animations:** Framer Motion
- **State Management:** React Hooks (useState, useEffect, useContext)
- **HTTP Client:** Axios for API calls
- **Responsive:** Mobile-first approach
- **Image Optimization:** Next.js Image or similar

## SPECIFIC COMPONENTS TO BUILD:

1. **Sidebar component** - Fixed left navigation with Kwai styling
2. **Header component** - Top bar with logo
3. **URLInput component** - Main search/convert input with orange border
4. **ContentTypeTabs component** - Videos/Shorts/Lives/Photos/Trends tabs
5. **VideoCard component** - Reusable Kwai-style content card
6. **ProgressBar component** - Download progress with orange gradient
7. **QualitySelector component** - Dropdown for quality options
8. **FeatureCard component** - Feature highlights with gradient icons
9. **HowItWorks component** - Step-by-step guide
10. **SupportedFormats component** - Grid of supported content types
11. **FAQ component** - Accordion FAQ section
12. **Footer component** - Site footer with disclaimer
13. **Toast component** - Kwai-style notification system
14. **LoadingSpinner component** - Orange gradient spinning loader
15. **PreviewModal component** - Content preview before download
16. **DownloadHistory component** - Recent downloads list
17. **ShareButtons component** - Social sharing options

## SPECIAL FEATURES:

- **Dark mode toggle** - Switch between light/dark theme
- **Language selector** - PT-BR default, prepare for EN/ES
- **Recent downloads** - Show last 10 downloaded items (localStorage)
- **Paste from clipboard** - One-click paste button with auto-detect
- **Batch download** - Download multiple videos
- **Drag and drop** - Paste URL by dragging text
- **Keyboard shortcuts** - Ctrl+V to paste, Enter to convert, Esc to close
- **PWA ready** - Install as app on mobile with Kwai-style icon
- **Offline mode** - Show cached results when offline
- **QR Code** - Generate QR code for mobile download
- **Live Detection** - Detect if content is still live
- **Watermark Removal** - Option to download without Kwai logo

## CONTENT TYPE SPECIFICS:

**Vídeos:**
- Standard Kwai videos
- HD quality support (1080p, 720p)
- Duration display
- View count
- Like count

**Shorts:**
- Vertical video (9:16 aspect ratio)
- Music/audio extraction option
- Original audio download
- Cover image download
- Duration display
- Play count

**Lives:**
- Live indicator (red, pulsing)
- Only downloadable after broadcast ends
- Viewer count display
- Replay support

**Fotos:**
- Original resolution
- High quality option
- Multiple photos support
- Thumbnail download

## BRANDING:

- **Site Name:** "Baixar Vídeos Kwai" or "KwaiSave"
- **Tagline:** "Vídeos • Shorts • Lives • Sem Marca d'Água"
- **Favicon:** Kwai-style play icon in orange gradient
- **Meta description:** "Baixe vídeos do Kwai sem marca d'água em alta qualidade. Shorts, lives e fotos. Ferramenta 100% grátis e ilimitada."
- **OG Image:** Kwai-style preview card
- **App Icon:** Orange gradient play icon

## SEO OPTIMIZATION:

- Proper H1, H2, H3 hierarchy
- Meta tags: "baixar videos kwai", "download kwai", "kwai sem marca d'água", "kwai video downloader"
- Schema.org structured data for WebApplication
- Open Graph tags for social sharing
- Twitter Cards
- Sitemap.xml
- Robots.txt
- Fast loading speed (Core Web Vitals)
- Mobile-friendly (Mobile-First Indexing)
- HTTPS security
- Canonical URLs

## LEGAL & COMPLIANCE:

- **Terms of Service** page
- **Privacy Policy** page (GDPR compliant)
- **DMCA** page for copyright claims
- **Disclaimer:** "Não somos afiliados ao Kwai ou Kuaishou Technology"
- **Cookie consent** banner (if using cookies)
- **Age restriction:** 13+ (COPPA compliance)
- **Copyright notice:** "Respeite os direitos autorais"

## API INTEGRATION (COBALT TOOLS - FREE):

```javascript
// Edge Function for Kwai download using Cobalt API
export async function downloadKwai(url) {
  const response = await fetch('https://api.cobalt.tools/api/json', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      vQuality: '1080',
      filenamePattern: 'kwai',
      removeWatermark: true // Request no watermark
    })
  });
  
  const data = await response.json();
  
  return {
    downloadUrl: data.url, // Direct URL from Kwai
    type: data.type,
    quality: data.quality,
    noWatermark: true
  };
}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kwai-sparkle-grab.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b13535f0-46da-49d0-99d4-2ca3e62ee0c7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
