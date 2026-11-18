const https = require('https');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/dumped_instagram.html', 'utf8');
const anyMp4 = html.match(/https:\\\/\\\/[^"']+\.mp4[^"']*/g) || [];

if (anyMp4.length > 0) {
  // Let's print the entire URL
  const fullUrl = anyMp4[0].replace(/\\\//g, '/').replace(/\\u0026/g, '&');
  console.log('Full URL length:', fullUrl.length);
  
  https.get(fullUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://www.instagram.com/',
      'Origin': 'https://www.instagram.com',
      'Sec-Fetch-Dest': 'video',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site'
    }
  }, res => {
    console.log('Status with headers:', res.statusCode);
    if (res.statusCode === 200 || res.statusCode === 206) {
      const f = fs.createWriteStream('E:/Portfolio/Shivom Builders/public/videos/about-reel.mp4');
      res.pipe(f);
      f.on('finish', () => console.log('Downloaded with headers! Size:', fs.statSync('E:/Portfolio/Shivom Builders/public/videos/about-reel.mp4').size));
    }
  });
}
