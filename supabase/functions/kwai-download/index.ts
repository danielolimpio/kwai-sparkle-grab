const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

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

    // First, resolve short URLs (k.kwai.com) to full URLs
    let resolvedUrl = url;
    if (url.includes('k.kwai.com') || url.includes('kw.ai')) {
      const headResp = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
        redirect: 'follow',
      });
      resolvedUrl = headResp.url;
      await headResp.text(); // consume body
    }

    // Extract video ID from URL
    const videoIdMatch = resolvedUrl.match(/video\/(\d+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    // Try Kwai's internal API first for no-watermark URL
    if (videoId) {
      try {
        const apiUrl = `https://www.kwai.com/rest/o/w/photo/${videoId}`;
        const apiResp = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'application/json',
            'Referer': 'https://www.kwai.com/',
          },
        });

        if (apiResp.ok) {
          const apiData = await apiResp.json();
          const photo = apiData?.photo || apiData?.data?.photo || apiData?.data;
          
          if (photo) {
            // Look for no-watermark URL in various fields
            const noWatermarkUrl = photo.mainMvUrl || photo.mp4Url || photo.videoUrl || photo.playUrl;
            const title = photo.caption || photo.title || 'Vídeo do Kwai';
            const thumbnail = photo.coverUrl || photo.headUrl || '';
            const author = photo.userName ? `@${photo.userName}` : (photo.kwaiId ? `@${photo.kwaiId}` : '');
            const likes = photo.likeCount ? String(photo.likeCount) : '0';
            const comments = photo.commentCount ? String(photo.commentCount) : '0';

            if (noWatermarkUrl) {
              return new Response(JSON.stringify({
                success: true,
                data: {
                  title: title,
                  author,
                  thumbnail,
                  likes,
                  comments,
                  downloadUrl: noWatermarkUrl,
                  type: 'video',
                }
              }), {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
              });
            }
          }
        } else {
          await apiResp.text();
        }
      } catch (e) {
        console.log('API method failed, falling back to HTML scraping:', e);
      }
    }

    // Fallback: Fetch the Kwai page HTML
    const response = await fetch(resolvedUrl, {
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

    // Try to find JSON data embedded in the page (often contains no-watermark URLs)
    let downloadUrl = '';
    
    // Look for mainMvUrl or similar no-watermark fields in embedded JSON
    const mainMvUrlMatch = html.match(/"mainMvUrl"\s*:\s*"([^"]+)"/);
    if (mainMvUrlMatch) {
      downloadUrl = mainMvUrlMatch[1].replace(/\\u002F/g, '/').replace(/\\\//g, '/');
    }

    // Fallback: look for mp4Url (also typically no watermark)
    if (!downloadUrl) {
      const mp4UrlMatch = html.match(/"mp4Url"\s*:\s*"([^"]+)"/);
      if (mp4UrlMatch) {
        downloadUrl = mp4UrlMatch[1].replace(/\\u002F/g, '/').replace(/\\\//g, '/');
      }
    }

    // Fallback: look for playUrl
    if (!downloadUrl) {
      const playUrlMatch = html.match(/"playUrl"\s*:\s*"([^"]+)"/);
      if (playUrlMatch) {
        downloadUrl = playUrlMatch[1].replace(/\\u002F/g, '/').replace(/\\\//g, '/');
      }
    }

    // Last resort: any MP4 URL
    if (!downloadUrl) {
      const mp4Matches = html.match(/https:\/\/[^\"\s]*?\.mp4[^\"\s]*/g);
      if (mp4Matches && mp4Matches.length > 0) {
        downloadUrl = mp4Matches[0];
      }
    }

    if (!downloadUrl) {
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

    let author = '';
    const authorMatch = description.match(/@(\w+)/);
    if (authorMatch) {
      author = `@${authorMatch[1]}`;
    }

    let likes = '0';
    let comments = '0';
    const likesMatch = description.match(/(\d+[\d,.]*\s*\w*)\s*Like/i);
    if (likesMatch) likes = likesMatch[1].trim();
    const commentsMatch = description.match(/(\d+[\d,.]*\s*\w*)\s*Comment/i);
    if (commentsMatch) comments = commentsMatch[1].trim();

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
    console.error('Error processing request:', error);
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
