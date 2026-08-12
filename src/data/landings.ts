// Páginas de destino (landing pages) focadas em intenções de busca específicas.
// Cada landing tem conteúdo único por idioma — nada de texto duplicado entre elas.

export interface LandingContent {
  title: string;
  description: string;
  h1: string;
  intro: string;
  bullets: string[];
  sections: { h2: string; paragraphs: string[] }[];
  steps: { h2: string; items: string[] };
  faq: { question: string; answer: string }[];
}

export interface LandingConfig {
  slug: string;
  key: "semMarca" | "pc" | "iphone";
  navKey: string;
  content: Record<string, LandingContent>;
}

const semMarca: LandingConfig = {
  slug: "/baixar-videos-kwai-sem-marca-dagua",
  key: "semMarca",
  navKey: "Sem Marca d'Água",
  content: {
    pt: {
      title: "Baixar Vídeos Kwai Sem Marca d'Água em HD | KwaiSave",
      description:
        "Baixar vídeos Kwai sem marca d'água em MP4 HD, grátis e por link. Remova a logo do Kwai do vídeo sem app, sem cadastro e sem perder qualidade.",
      h1: "Baixar Vídeos do Kwai Sem Marca d'Água",
      intro:
        "Todo vídeo publicado no Kwai sai com o carimbo do aplicativo e o nome do criador gravados na imagem. O KwaiSave busca o arquivo original hospedado nos servidores do Kwai — a mesma versão limpa que o app usa antes de aplicar a sobreposição — e entrega um MP4 sem marca d'água, com a resolução e o áudio intactos.",
      bullets: [
        "MP4 limpo, sem a logo do Kwai e sem o @usuário sobreposto",
        "Sem recompressão: mesma resolução, mesmo bitrate e áudio original",
        "Funciona com links completos do kwai.com e encurtados kw.ai",
        "Grátis, ilimitado, sem cadastro e sem instalar aplicativo",
      ],
      sections: [
        {
          h2: "Por que a marca d'água aparece no vídeo do Kwai?",
          paragraphs: [
            "Quando você usa o botão \"Salvar\" dentro do próprio aplicativo, o Kwai renderiza uma cópia nova do vídeo com a logo animada no canto e o nome de usuário do autor. Essa cópia é sempre um arquivo diferente do original — normalmente com bitrate menor e um leve borrão nas bordas.",
            "O arquivo original continua disponível publicamente no CDN do Kwai. É esse arquivo que o KwaiSave localiza a partir do link que você cola, o que explica por que o download sai sem marca d'água e com qualidade melhor do que o salvamento feito dentro do app.",
          ],
        },
        {
          h2: "Remover marca d'água x baixar sem marca d'água",
          paragraphs: [
            "Aplicativos que prometem \"remover marca d'água\" costumam recortar as bordas do vídeo ou aplicar um borrão em cima da logo — o resultado é um vídeo cortado, desfocado ou com um retângulo estranho no canto.",
            "Aqui não existe edição: o vídeo nunca teve a marca d'água. Por isso o enquadramento permanece completo, sem cortes laterais e sem manchas de desfoque, exatamente como o criador gravou.",
          ],
        },
        {
          h2: "Qualidade preservada em cada download",
          paragraphs: [
            "O KwaiSave lista as resoluções que o servidor do Kwai disponibiliza para aquele vídeo — normalmente 360p, 480p, 720p e, quando o autor publicou em alta definição, 1080p Full HD. Você escolhe antes de baixar.",
            "O áudio vem embutido no mesmo MP4 (H.264 + AAC), formato reconhecido por Android, iPhone, Windows, macOS, editores de vídeo e Smart TVs sem nenhuma conversão adicional.",
          ],
        },
      ],
      steps: {
        h2: "Como baixar vídeo do Kwai sem marca d'água em 3 passos",
        items: [
          "No Kwai, toque em Compartilhar no vídeo desejado e escolha \"Copiar link\".",
          "Cole o link no campo acima e toque em Baixar Agora — o servidor identifica o arquivo original em segundos.",
          "Escolha a resolução e salve o MP4 limpo no seu celular ou computador.",
        ],
      },
      faq: [
        {
          question: "Dá para baixar vídeo do Kwai sem marca d'água de graça?",
          answer:
            "Sim. O KwaiSave é 100% gratuito, sem limite diário de downloads, sem cadastro e sem assinatura. Basta colar o link do vídeo público do Kwai.",
        },
        {
          question: "O vídeo perde qualidade ao tirar a marca d'água?",
          answer:
            "Não. Como o arquivo baixado é o original do servidor do Kwai, não há recompressão nem corte de bordas. Resolução, taxa de quadros e áudio permanecem idênticos ao publicado.",
        },
        {
          question: "Funciona com vídeos privados ou de contas fechadas?",
          answer:
            "Não. Somente vídeos públicos podem ser processados. Vídeos removidos, privados ou de perfis suspensos não geram download.",
        },
        {
          question: "Preciso instalar algum removedor de marca d'água?",
          answer:
            "Não. Todo o processo acontece no navegador. Não é preciso instalar Kwai APK, extensão ou removedor de marca d'água no celular ou no PC.",
        },
      ],
    },
    en: {
      title: "Download Kwai Videos Without Watermark in HD | KwaiSave",
      description:
        "Download Kwai videos without watermark in MP4 HD, free and by link. Get the clean original file — no app, no signup and no quality loss.",
      h1: "Download Kwai Videos Without Watermark",
      intro:
        "Every clip saved from inside the Kwai app carries the animated logo and the creator's @username burned into the frame. KwaiSave fetches the original file hosted on Kwai's servers — the clean version the app uses before the overlay is applied — and hands you an MP4 with resolution and audio untouched.",
      bullets: [
        "Clean MP4 with no Kwai logo and no username overlay",
        "No re-encoding: same resolution, same bitrate, original audio",
        "Works with full kwai.com links and shortened kw.ai links",
        "Free, unlimited, no signup and no app installation",
      ],
      sections: [
        {
          h2: "Why does the Kwai watermark appear at all?",
          paragraphs: [
            "When you tap Save inside the app, Kwai renders a brand-new copy of the video with the animated logo in the corner and the author's handle. That copy is always a different file from the original, usually with a lower bitrate and softer edges.",
            "The original file stays publicly available on Kwai's CDN. That is the file KwaiSave locates from the link you paste, which is why the download comes out watermark-free and sharper than the in-app save.",
          ],
        },
        {
          h2: "Watermark removal vs. watermark-free download",
          paragraphs: [
            "Apps that promise to \"remove the watermark\" usually crop the video edges or blur a rectangle over the logo, leaving a cropped or smudged frame.",
            "There is no editing here: the file never had a watermark. Framing stays complete, with no side cropping and no blur patches, exactly as the creator recorded it.",
          ],
        },
        {
          h2: "Quality preserved on every download",
          paragraphs: [
            "KwaiSave lists the resolutions Kwai's server exposes for that video — typically 360p, 480p, 720p and, when the author uploaded in high definition, 1080p Full HD. You pick before downloading.",
            "Audio ships inside the same MP4 (H.264 + AAC), a format Android, iPhone, Windows, macOS, video editors and smart TVs read with no extra conversion.",
          ],
        },
      ],
      steps: {
        h2: "How to download a Kwai video without watermark in 3 steps",
        items: [
          "In Kwai, tap Share on the video and choose \"Copy link\".",
          "Paste the link in the field above and tap Download — the server resolves the original file in seconds.",
          "Pick the resolution and save the clean MP4 to your phone or computer.",
        ],
      },
      faq: [
        {
          question: "Is downloading Kwai videos without watermark free?",
          answer:
            "Yes. KwaiSave is completely free, with no daily download limit, no account and no subscription. Just paste a public Kwai video link.",
        },
        {
          question: "Does removing the watermark reduce quality?",
          answer:
            "No. The downloaded file is the original from Kwai's server, so there is no re-encoding and no edge cropping. Resolution, frame rate and audio stay identical.",
        },
        {
          question: "Does it work with private accounts?",
          answer:
            "No. Only public videos can be processed. Removed, private or suspended-account videos will not produce a download.",
        },
        {
          question: "Do I need a watermark remover app?",
          answer:
            "No. Everything runs in the browser. No Kwai APK, extension or watermark remover is required on phone or PC.",
        },
      ],
    },
    es: {
      title: "Descargar Videos Kwai Sin Marca de Agua en HD | KwaiSave",
      description:
        "Descargar videos Kwai sin marca de agua en MP4 HD, gratis y por enlace. Consigue el archivo original limpio, sin app, sin registro y sin perder calidad.",
      h1: "Descargar Videos de Kwai Sin Marca de Agua",
      intro:
        "Todo video guardado desde la propia app de Kwai lleva el logo animado y el @usuario del creador incrustados en la imagen. KwaiSave busca el archivo original alojado en los servidores de Kwai —la versión limpia previa a la superposición— y entrega un MP4 con la resolución y el audio intactos.",
      bullets: [
        "MP4 limpio, sin logo de Kwai ni nombre de usuario sobrepuesto",
        "Sin recompresión: misma resolución, mismo bitrate y audio original",
        "Compatible con enlaces completos de kwai.com y cortos kw.ai",
        "Gratis, ilimitado, sin registro y sin instalar aplicaciones",
      ],
      sections: [
        {
          h2: "¿Por qué aparece la marca de agua de Kwai?",
          paragraphs: [
            "Al pulsar Guardar dentro de la aplicación, Kwai genera una copia nueva del video con el logo animado en la esquina y el nombre del autor. Esa copia siempre es un archivo distinto al original, normalmente con menor bitrate.",
            "El archivo original sigue disponible públicamente en el CDN de Kwai. Es ese archivo el que KwaiSave localiza a partir del enlace que pegas, por eso la descarga sale sin marca de agua y con mejor calidad.",
          ],
        },
        {
          h2: "Quitar la marca de agua vs. descargar sin marca de agua",
          paragraphs: [
            "Las apps que prometen \"quitar la marca de agua\" suelen recortar los bordes del video o aplicar un desenfoque sobre el logo, dejando un encuadre cortado o manchado.",
            "Aquí no hay edición: el archivo nunca tuvo marca de agua. El encuadre permanece completo, sin recortes laterales ni parches borrosos.",
          ],
        },
        {
          h2: "Calidad preservada en cada descarga",
          paragraphs: [
            "KwaiSave muestra las resoluciones que el servidor de Kwai ofrece para ese video: normalmente 360p, 480p, 720p y, si el autor publicó en alta definición, 1080p Full HD.",
            "El audio viaja dentro del mismo MP4 (H.264 + AAC), formato que Android, iPhone, Windows, macOS y Smart TV reproducen sin conversiones adicionales.",
          ],
        },
      ],
      steps: {
        h2: "Cómo descargar un video de Kwai sin marca de agua en 3 pasos",
        items: [
          "En Kwai, pulsa Compartir en el video y elige \"Copiar enlace\".",
          "Pega el enlace en el campo de arriba y pulsa Descargar.",
          "Elige la resolución y guarda el MP4 limpio en tu móvil u ordenador.",
        ],
      },
      faq: [
        {
          question: "¿Descargar videos de Kwai sin marca de agua es gratis?",
          answer:
            "Sí. KwaiSave es totalmente gratuito, sin límite diario, sin cuenta y sin suscripción. Solo pega el enlace de un video público de Kwai.",
        },
        {
          question: "¿Se pierde calidad al quitar la marca de agua?",
          answer:
            "No. El archivo descargado es el original del servidor de Kwai, sin recompresión ni recorte de bordes.",
        },
        {
          question: "¿Funciona con cuentas privadas?",
          answer:
            "No. Solo se procesan videos públicos. Los videos eliminados o de perfiles privados no generan descarga.",
        },
        {
          question: "¿Necesito una app para quitar marcas de agua?",
          answer:
            "No. Todo ocurre en el navegador, sin instalar Kwai APK, extensiones ni removedores de marca de agua.",
        },
      ],
    },
  },
};

const pc: LandingConfig = {
  slug: "/baixar-videos-kwai-no-pc",
  key: "pc",
  navKey: "Download no PC",
  content: {
    pt: {
      title: "Baixar Vídeos do Kwai no PC (Windows, Mac e Linux) | KwaiSave",
      description:
        "Como baixar vídeos do Kwai no PC pelo navegador: Windows, macOS e Linux. Download em MP4 HD sem programas, sem emulador e sem instalar o Kwai no computador.",
      h1: "Baixar Vídeos do Kwai no PC",
      intro:
        "Não existe programa oficial do Kwai para computador, e usar emulador de Android só para salvar um vídeo é trabalho demais. No PC, o caminho direto é copiar o endereço do vídeo na barra do navegador e colar aqui: o MP4 é gerado no servidor e cai direto na sua pasta de downloads.",
      bullets: [
        "Compatível com Windows 10 e 11, macOS e distribuições Linux",
        "Funciona no Chrome, Edge, Firefox, Opera e Brave",
        "Sem emulador, sem BlueStacks e sem instalar Kwai no PC",
        "Arquivo MP4 pronto para editar no Premiere, CapCut ou DaVinci",
      ],
      sections: [
        {
          h2: "Onde encontrar o link do vídeo no computador",
          paragraphs: [
            "Abra o perfil ou o vídeo no site do Kwai pelo navegador do PC. O endereço completo que aparece na barra do navegador já é o link necessário — basta selecionar e copiar com Ctrl+C (ou Cmd+C no Mac).",
            "Se você recebeu o vídeo por WhatsApp, Telegram ou e-mail, o link encurtado kw.ai também é aceito. O servidor resolve o redirecionamento antes de gerar o MP4.",
          ],
        },
        {
          h2: "Onde o arquivo é salvo no Windows, macOS e Linux",
          paragraphs: [
            "No Windows, o vídeo vai para C:\\Usuários\\SeuNome\\Downloads, a menos que o navegador esteja configurado para perguntar o destino. No macOS, o destino padrão é a pasta Transferências; no Linux, ~/Downloads.",
            "Se quiser escolher a pasta a cada download, ative a opção \"Perguntar onde salvar cada arquivo\" nas configurações de download do navegador.",
          ],
        },
        {
          h2: "Vantagens de baixar Kwai pelo computador",
          paragraphs: [
            "A tela maior facilita conferir a resolução antes de salvar, e a conexão por cabo costuma completar downloads longos mais rápido do que o 4G do celular.",
            "Para quem edita conteúdo, o MP4 baixado no PC entra direto na linha do tempo do editor sem transferência por cabo ou nuvem — útil para cortes, legendas e reaproveitamento de material.",
          ],
        },
      ],
      steps: {
        h2: "Como baixar vídeo do Kwai no PC passo a passo",
        items: [
          "Abra o vídeo do Kwai no navegador do computador e copie o endereço da barra de URL.",
          "Cole o endereço no campo desta página e clique em Baixar Agora.",
          "Escolha a qualidade e confirme o download — o MP4 vai para a pasta de downloads do sistema.",
        ],
      },
      faq: [
        {
          question: "Preciso instalar o Kwai no PC para baixar os vídeos?",
          answer:
            "Não. O download acontece pelo navegador. Não é preciso emulador Android, BlueStacks nem qualquer programa instalado no Windows, macOS ou Linux.",
        },
        {
          question: "Onde fica o vídeo do Kwai baixado no Windows?",
          answer:
            "Na pasta Downloads do usuário (C:\\Usuários\\SeuNome\\Downloads), salvo se o navegador estiver configurado para perguntar o destino de cada arquivo.",
        },
        {
          question: "Dá para baixar vídeos do Kwai no Mac?",
          answer:
            "Sim. O processo é idêntico no Safari, Chrome ou Firefox do macOS, e o arquivo vai para a pasta Transferências.",
        },
        {
          question: "O download no PC também vem sem marca d'água?",
          answer:
            "Sim. Independentemente do dispositivo, o arquivo entregue é o original do servidor do Kwai, sem a logo sobreposta.",
        },
      ],
    },
    en: {
      title: "Download Kwai Videos on PC (Windows, Mac, Linux) | KwaiSave",
      description:
        "How to download Kwai videos on PC straight from the browser: Windows, macOS and Linux. MP4 HD downloads with no software, no emulator, no Kwai install.",
      h1: "Download Kwai Videos on PC",
      intro:
        "There is no official Kwai desktop app, and spinning up an Android emulator just to save one clip is overkill. On a computer the direct route is copying the video address from the browser bar and pasting it here: the MP4 is built server-side and lands in your downloads folder.",
      bullets: [
        "Works on Windows 10 and 11, macOS and Linux distributions",
        "Supported in Chrome, Edge, Firefox, Opera and Brave",
        "No emulator, no BlueStacks, no Kwai installation on the PC",
        "MP4 ready to edit in Premiere, CapCut or DaVinci Resolve",
      ],
      sections: [
        {
          h2: "Where to find the video link on a computer",
          paragraphs: [
            "Open the profile or the video on the Kwai website in your desktop browser. The full address in the URL bar is the link you need — select it and copy with Ctrl+C (Cmd+C on Mac).",
            "If the clip reached you through WhatsApp, Telegram or email, the shortened kw.ai link works too. The server resolves the redirect before building the MP4.",
          ],
        },
        {
          h2: "Where the file lands on Windows, macOS and Linux",
          paragraphs: [
            "On Windows the video goes to C:\\Users\\YourName\\Downloads unless the browser is set to ask for a destination. On macOS the default is the Downloads folder; on Linux, ~/Downloads.",
            "To choose the folder every time, enable \"Ask where to save each file before downloading\" in your browser's download settings.",
          ],
        },
        {
          h2: "Why downloading Kwai on desktop helps",
          paragraphs: [
            "A larger screen makes it easier to check the resolution before saving, and a wired connection usually finishes long downloads faster than mobile data.",
            "For editors, a desktop MP4 drops straight into the timeline with no cable or cloud transfer — handy for cuts, subtitles and repurposing footage.",
          ],
        },
      ],
      steps: {
        h2: "How to download a Kwai video on PC step by step",
        items: [
          "Open the Kwai video in your desktop browser and copy the address from the URL bar.",
          "Paste it into the field on this page and click Download.",
          "Choose the quality and confirm — the MP4 goes to your system downloads folder.",
        ],
      },
      faq: [
        {
          question: "Do I need to install Kwai on my PC?",
          answer:
            "No. The download happens in the browser. No Android emulator, BlueStacks or installed software is required on Windows, macOS or Linux.",
        },
        {
          question: "Where is the downloaded Kwai video on Windows?",
          answer:
            "In the user's Downloads folder (C:\\Users\\YourName\\Downloads), unless your browser asks for a destination each time.",
        },
        {
          question: "Can I download Kwai videos on a Mac?",
          answer:
            "Yes. The process is identical in Safari, Chrome or Firefox on macOS, and the file goes to the Downloads folder.",
        },
        {
          question: "Is the PC download also watermark-free?",
          answer:
            "Yes. Whatever the device, the delivered file is the original from Kwai's server, without the overlaid logo.",
        },
      ],
    },
    es: {
      title: "Descargar Videos de Kwai en PC (Windows, Mac y Linux) | KwaiSave",
      description:
        "Cómo descargar videos de Kwai en PC desde el navegador: Windows, macOS y Linux. Descarga MP4 HD sin programas, sin emulador y sin instalar Kwai.",
      h1: "Descargar Videos de Kwai en PC",
      intro:
        "No existe una app oficial de Kwai para ordenador y usar un emulador de Android solo para guardar un video es demasiado. En el PC lo directo es copiar la dirección del video en la barra del navegador y pegarla aquí: el MP4 se genera en el servidor y cae en tu carpeta de descargas.",
      bullets: [
        "Compatible con Windows 10 y 11, macOS y distribuciones Linux",
        "Funciona en Chrome, Edge, Firefox, Opera y Brave",
        "Sin emulador, sin BlueStacks y sin instalar Kwai en el PC",
        "MP4 listo para editar en Premiere, CapCut o DaVinci",
      ],
      sections: [
        {
          h2: "Dónde encontrar el enlace del video en el ordenador",
          paragraphs: [
            "Abre el perfil o el video en la web de Kwai desde el navegador del PC. La dirección completa de la barra de URL ya es el enlace que necesitas: selecciónala y cópiala con Ctrl+C (Cmd+C en Mac).",
            "Si recibiste el video por WhatsApp, Telegram o correo, el enlace corto kw.ai también sirve. El servidor resuelve la redirección antes de generar el MP4.",
          ],
        },
        {
          h2: "Dónde se guarda el archivo en Windows, macOS y Linux",
          paragraphs: [
            "En Windows el video va a C:\\Usuarios\\TuNombre\\Descargas, salvo que el navegador pregunte el destino. En macOS la carpeta por defecto es Descargas; en Linux, ~/Downloads.",
            "Para elegir carpeta en cada descarga, activa \"Preguntar dónde guardar cada archivo\" en los ajustes del navegador.",
          ],
        },
        {
          h2: "Ventajas de descargar Kwai desde el ordenador",
          paragraphs: [
            "La pantalla grande facilita comprobar la resolución antes de guardar y la conexión por cable suele completar descargas largas más rápido que los datos móviles.",
            "Para quien edita, el MP4 descargado entra directo en la línea de tiempo sin transferencias por cable o nube.",
          ],
        },
      ],
      steps: {
        h2: "Cómo descargar un video de Kwai en PC paso a paso",
        items: [
          "Abre el video de Kwai en el navegador del ordenador y copia la dirección de la barra de URL.",
          "Pega la dirección en el campo de esta página y pulsa Descargar.",
          "Elige la calidad y confirma: el MP4 irá a la carpeta de descargas del sistema.",
        ],
      },
      faq: [
        {
          question: "¿Necesito instalar Kwai en el PC para descargar videos?",
          answer:
            "No. La descarga ocurre en el navegador, sin emulador de Android, BlueStacks ni programas instalados en Windows, macOS o Linux.",
        },
        {
          question: "¿Dónde queda el video de Kwai descargado en Windows?",
          answer:
            "En la carpeta Descargas del usuario (C:\\Usuarios\\TuNombre\\Descargas), salvo que el navegador pregunte el destino.",
        },
        {
          question: "¿Se puede descargar Kwai en Mac?",
          answer:
            "Sí. El proceso es idéntico en Safari, Chrome o Firefox de macOS y el archivo va a la carpeta Descargas.",
        },
        {
          question: "¿La descarga en PC también es sin marca de agua?",
          answer:
            "Sí. En cualquier dispositivo se entrega el archivo original del servidor de Kwai, sin el logo sobrepuesto.",
        },
      ],
    },
  },
};

const iphone: LandingConfig = {
  slug: "/baixar-videos-kwai-no-iphone",
  key: "iphone",
  navKey: "Download no iPhone",
  content: {
    pt: {
      title: "Baixar Vídeos do Kwai no iPhone e Salvar na Galeria | KwaiSave",
      description:
        "Como baixar vídeos do Kwai no iPhone pelo Safari e salvar direto na galeria (Fotos). Download em MP4 sem marca d'água, sem app e sem atalhos complicados.",
      h1: "Baixar Vídeos do Kwai no iPhone",
      intro:
        "No iOS o download não cai na galeria automaticamente: o Safari envia o arquivo para o app Arquivos e é você quem decide mover para Fotos. Este guia mostra o caminho completo no iPhone e no iPad, sem atalhos do app Atalhos e sem instalar nada da App Store.",
      bullets: [
        "Funciona no Safari, Chrome e Edge do iOS e iPadOS",
        "Sem app, sem jailbreak e sem configurar Atalhos (Shortcuts)",
        "MP4 compatível com Fotos, iMovie e AirDrop",
        "Vídeo salvo sem a marca d'água do Kwai",
      ],
      sections: [
        {
          h2: "Copiando o link do vídeo no app Kwai do iPhone",
          paragraphs: [
            "Toque no ícone de compartilhar dentro do vídeo e escolha \"Copiar link\". O iOS guarda o endereço na área de transferência; ao voltar ao Safari, o campo desta página oferece a colagem com um toque.",
            "Se o iPhone perguntar \"Permitir colar?\", confirme — é apenas o navegador pedindo acesso ao que você copiou no Kwai.",
          ],
        },
        {
          h2: "Do app Arquivos para o rolo da câmera",
          paragraphs: [
            "Depois de tocar em baixar, o Safari mostra o ícone de downloads (seta para baixo) ao lado da barra de endereço. Toque nele, escolha o vídeo e o iOS abre o arquivo no app Arquivos, normalmente na pasta Downloads do iCloud Drive ou \"No meu iPhone\".",
            "Para levar o vídeo até a galeria, mantenha o arquivo pressionado, toque em Compartilhar e escolha \"Salvar Vídeo\". Ele aparece imediatamente no app Fotos, pronto para editar ou reenviar.",
          ],
        },
        {
          h2: "Dicas para iPhones com pouco espaço",
          paragraphs: [
            "Escolha 720p em vez de 1080p quando o armazenamento estiver apertado: a diferença visual em tela de celular é pequena e o arquivo pode ficar até 60% menor.",
            "Se preferir não ocupar a memória interna, salve na pasta do iCloud Drive em vez de \"No meu iPhone\" — o vídeo continua acessível pelo app Arquivos e pelo Mac.",
          ],
        },
      ],
      steps: {
        h2: "Como salvar vídeo do Kwai na galeria do iPhone",
        items: [
          "No Kwai, toque em Compartilhar e depois em \"Copiar link\".",
          "Abra esta página no Safari, cole o link e toque em Baixar Agora.",
          "Toque no ícone de downloads do Safari, abra o vídeo no app Arquivos e use Compartilhar → Salvar Vídeo para enviá-lo ao app Fotos.",
        ],
      },
      faq: [
        {
          question: "Por que o vídeo do Kwai não aparece direto na galeria do iPhone?",
          answer:
            "Por segurança, o iOS envia todo download do navegador para o app Arquivos. Basta abrir o arquivo e usar Compartilhar → Salvar Vídeo para movê-lo ao app Fotos.",
        },
        {
          question: "Preciso do app Atalhos para baixar Kwai no iPhone?",
          answer:
            "Não. O download funciona direto no Safari, sem criar atalhos, sem perfis de configuração e sem instalar aplicativos.",
        },
        {
          question: "Funciona no iPad também?",
          answer:
            "Sim. O iPadOS segue exatamente o mesmo fluxo: download pelo Safari, arquivo no app Arquivos e opção Salvar Vídeo para a galeria.",
        },
        {
          question: "O vídeo baixado no iPhone fica sem marca d'água?",
          answer:
            "Sim. O arquivo entregue é o original do servidor do Kwai, sem a logo animada nem o nome de usuário sobreposto.",
        },
      ],
    },
    en: {
      title: "Download Kwai Videos on iPhone and Save to Camera Roll | KwaiSave",
      description:
        "How to download Kwai videos on iPhone with Safari and save them to Photos. MP4 without watermark, no app, no Shortcuts setup required.",
      h1: "Download Kwai Videos on iPhone",
      intro:
        "On iOS a download does not land in your gallery automatically: Safari sends the file to the Files app and you decide when to move it to Photos. This guide covers the full path on iPhone and iPad, with no Shortcuts recipe and nothing to install from the App Store.",
      bullets: [
        "Works in Safari, Chrome and Edge on iOS and iPadOS",
        "No app, no jailbreak, no Shortcuts configuration",
        "MP4 compatible with Photos, iMovie and AirDrop",
        "Saved without the Kwai watermark",
      ],
      sections: [
        {
          h2: "Copying the video link in the Kwai iPhone app",
          paragraphs: [
            "Tap the share icon on the video and choose \"Copy link\". iOS stores the address in the clipboard, and back in Safari the field on this page offers a one-tap paste.",
            "If iPhone asks \"Allow Paste?\", confirm — that is just the browser requesting access to what you copied in Kwai.",
          ],
        },
        {
          h2: "From the Files app to the camera roll",
          paragraphs: [
            "After you tap download, Safari shows the downloads icon (a downward arrow) next to the address bar. Tap it, pick the video, and iOS opens it in the Files app — usually the Downloads folder on iCloud Drive or \"On My iPhone\".",
            "To move it to your gallery, long-press the file, tap Share and choose \"Save Video\". It appears in Photos right away, ready to edit or resend.",
          ],
        },
        {
          h2: "Tips for iPhones low on storage",
          paragraphs: [
            "Pick 720p instead of 1080p when space is tight: the visual difference on a phone screen is small and the file can be up to 60% lighter.",
            "To avoid filling internal memory, save into an iCloud Drive folder instead of \"On My iPhone\" — the video stays reachable from Files and from your Mac.",
          ],
        },
      ],
      steps: {
        h2: "How to save a Kwai video to the iPhone gallery",
        items: [
          "In Kwai, tap Share and then \"Copy link\".",
          "Open this page in Safari, paste the link and tap Download.",
          "Tap Safari's downloads icon, open the video in Files and use Share → Save Video to send it to Photos.",
        ],
      },
      faq: [
        {
          question: "Why doesn't the Kwai video go straight to my iPhone gallery?",
          answer:
            "For security reasons iOS routes every browser download to the Files app. Open the file and use Share → Save Video to move it into Photos.",
        },
        {
          question: "Do I need the Shortcuts app?",
          answer:
            "No. The download works directly in Safari, with no shortcut recipe, configuration profile or extra app.",
        },
        {
          question: "Does it work on iPad?",
          answer:
            "Yes. iPadOS follows the same flow: download in Safari, file in the Files app, then Save Video to the gallery.",
        },
        {
          question: "Is the iPhone download watermark-free?",
          answer:
            "Yes. The delivered file is the original from Kwai's server, without the animated logo or username overlay.",
        },
      ],
    },
    es: {
      title: "Descargar Videos de Kwai en iPhone y Guardar en la Galería | KwaiSave",
      description:
        "Cómo descargar videos de Kwai en iPhone desde Safari y guardarlos en Fotos. MP4 sin marca de agua, sin app y sin configurar Atajos.",
      h1: "Descargar Videos de Kwai en iPhone",
      intro:
        "En iOS la descarga no llega sola a la galería: Safari envía el archivo a la app Archivos y tú decides cuándo pasarlo a Fotos. Esta guía cubre todo el recorrido en iPhone y iPad, sin atajos y sin instalar nada de la App Store.",
      bullets: [
        "Funciona en Safari, Chrome y Edge de iOS y iPadOS",
        "Sin app, sin jailbreak y sin configurar Atajos",
        "MP4 compatible con Fotos, iMovie y AirDrop",
        "Guardado sin la marca de agua de Kwai",
      ],
      sections: [
        {
          h2: "Copiar el enlace del video en la app de Kwai",
          paragraphs: [
            "Pulsa el icono de compartir en el video y elige \"Copiar enlace\". iOS guarda la dirección en el portapapeles y, al volver a Safari, el campo de esta página permite pegar con un toque.",
            "Si el iPhone pregunta \"¿Permitir pegar?\", confirma: es solo el navegador pidiendo acceso a lo que copiaste en Kwai.",
          ],
        },
        {
          h2: "De la app Archivos al carrete",
          paragraphs: [
            "Tras pulsar descargar, Safari muestra el icono de descargas (flecha hacia abajo) junto a la barra de direcciones. Tócalo, elige el video y iOS lo abrirá en la app Archivos, normalmente en Descargas de iCloud Drive o \"En mi iPhone\".",
            "Para llevarlo a la galería, mantén pulsado el archivo, toca Compartir y elige \"Guardar video\". Aparecerá al instante en la app Fotos.",
          ],
        },
        {
          h2: "Consejos para iPhone con poco espacio",
          paragraphs: [
            "Elige 720p en lugar de 1080p cuando falte almacenamiento: la diferencia en pantalla de móvil es mínima y el archivo puede pesar hasta un 60% menos.",
            "Si prefieres no ocupar memoria interna, guarda en iCloud Drive en vez de \"En mi iPhone\".",
          ],
        },
      ],
      steps: {
        h2: "Cómo guardar un video de Kwai en la galería del iPhone",
        items: [
          "En Kwai, pulsa Compartir y luego \"Copiar enlace\".",
          "Abre esta página en Safari, pega el enlace y pulsa Descargar.",
          "Toca el icono de descargas de Safari, abre el video en Archivos y usa Compartir → Guardar video para enviarlo a Fotos.",
        ],
      },
      faq: [
        {
          question: "¿Por qué el video de Kwai no va directo a la galería del iPhone?",
          answer:
            "Por seguridad, iOS envía toda descarga del navegador a la app Archivos. Abre el archivo y usa Compartir → Guardar video para pasarlo a Fotos.",
        },
        {
          question: "¿Necesito la app Atajos?",
          answer:
            "No. La descarga funciona directamente en Safari, sin atajos ni perfiles de configuración.",
        },
        {
          question: "¿Funciona en iPad?",
          answer:
            "Sí. iPadOS sigue el mismo flujo: descarga en Safari, archivo en Archivos y Guardar video para la galería.",
        },
        {
          question: "¿La descarga en iPhone es sin marca de agua?",
          answer:
            "Sí. Se entrega el archivo original del servidor de Kwai, sin logo animado ni nombre de usuario.",
        },
      ],
    },
  },
};

export const LANDINGS: LandingConfig[] = [semMarca, pc, iphone];

export function getLandingContent(config: LandingConfig, lang: string): LandingContent {
  return config.content[lang] ?? config.content.en;
}
