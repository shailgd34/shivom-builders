const fs = require('fs');
const https = require('https');
const path = require('path');

const html = fs.readFileSync('C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/dumped_instagram.html', 'utf8');

const anyMp4 = html.match(/https:\\\/\\\/[^"']+\.mp4[^"']*/g) || [];
console.log('Found mp4 count:', anyMp4.length);

if (anyMp4.length > 0) {
  const cleanUrl = anyMp4[0].replace(/\\\//g, '/').replace(/\\u0026/g, '&');
  console.log('Clean URL:', cleanUrl.substring(0, 160));
  
  const target = path.join(__dirname, '../public/videos/about-reel.mp4');
  
  function download(u) {
    https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      console.log('Status:', res.statusCode);
      if (res.headers.location) {
        return download(res.headers.location);
      }
      if (res.statusCode !== 200) {
        console.log('Failed to download with status:', res.statusCode);
        return;
      }
      const file = fs.createWriteStream(target);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Successfully saved about-reel.mp4! Size:', fs.statSync(target).size);
      });
    }).on('error', e => console.error('Error:', e.message));
  }
  
  download(cleanUrl);
}
