const https = require('https');
const fs = require('fs');

const url = 'https://www.instagram.com/reel/DcVcO0RESq_/?utm_source=ig_web_copy_link&bqrl=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
  }
}, res => {
  console.log('Status code:', res.statusCode);
  console.log('Headers location:', res.headers.location);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/instagram_reel_page.html', data);
    console.log('Page saved, length:', data.length);
    
    // Check for og:video, og:image, video_url
    const videoMatches = data.match(/https:\/\/[^"'\\]+\.mp4[^"'\\]*/g) || [];
    console.log('Video MP4 matches count:', videoMatches.length);
    if (videoMatches.length > 0) {
      console.log('Sample video URL:', videoMatches[0].replace(/\\u0026/g, '&'));
    }
    
    const ogImage = data.match(/<meta property="og:image" content="([^"]+)"/);
    if (ogImage) console.log('og:image:', ogImage[1]);
    
    const ogTitle = data.match(/<meta property="og:title" content="([^"]+)"/);
    if (ogTitle) console.log('og:title:', ogTitle[1]);
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
