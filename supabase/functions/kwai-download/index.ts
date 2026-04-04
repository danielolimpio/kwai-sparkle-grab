import { corsHeaders } from '@supabase/supabase-js/cors'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();

    if (!url || typeof url !== 'string') {
      return new Response(JSON.stringify({ error: 'URL é obrigatória' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate Kwai URL
    const kwaiPattern = /kwai\.com|kw\.ai|kwai/i;
    if (!kwaiPattern.test(url)) {
      return new Response(JSON.stringify({ error: 'Link inválido. Use um link do Kwai.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Fetch the Kwai page
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
      },
      redirect: 'follow',
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Erro ao acessar o vídeo. Tente outro link.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const html = await response.text();

    // Extract MP4 URLs
    const mp4Matches = html.match(/https:\/\/[^\"\s]*?\.mp4[^\"\s]*/g);
    if (!mp4Matches || mp4Matches.length === 0) {
      return new Response(JSON.stringify({ error: 'Não foi possível encontrar o vídeo. Verifique se o link é público.' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Extract metadata from og tags
    const getOg = (property: string): string => {
      const match = html.match(new RegExp(`property="${property}"[^>]*content="([^"]*)"`, 'i'));
      return match ? match[1] : '';
    };

    const title = getOg('og:title') || 'Vídeo do Kwai';
    const description = getOg('og:description') || '';
    const thumbnail = getOg('og:image') || '';

    // Extract author from description or URL
    let author = '';
    const authorMatch = description.match(/@(\w+)/);
    if (authorMatch) {
      author = `@${authorMatch[1]}`;
    } else {
      const urlAuthorMatch = url.match(/@([^/]+)/);
      if (urlAuthorMatch) author = `@${urlAuthorMatch[1]}`;
    }

    // Extract stats from description
    let likes = '0';
    let comments = '0';
    const likesMatch = description.match(/(\d+[\d,.]*\s*\w*)\s*Like/i);
    if (likesMatch) likes = likesMatch[1].trim();
    const commentsMatch = description.match(/(\d+[\d,.]*\s*\w*)\s*Comment/i);
    if (commentsMatch) comments = commentsMatch[1].trim();

    // Use the first MP4 URL (usually the best quality)
    const downloadUrl = mp4Matches[0];

    return new Response(JSON.stringify({
      success: true,
      data: {
        title: decodeHtmlEntities(title),
        author,
        thumbnail,
        likes,
        comments,
        downloadUrl,
        type: 'video',
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erro ao processar. Tente novamente.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'");
}
