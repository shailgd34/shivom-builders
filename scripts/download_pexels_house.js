const https = require('https');
const fs = require('fs');
const path = require('path');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      const f = fs.createWriteStream(dest);
      res.pipe(f);
      f.on('finish', () => f.close(() => resolve()));
    }).on('error', reject);
  });
}

async function run() {
  const dest = path.join(__dirname, '../public/videos/house-construction.mp4');
  console.log('Downloading house construction video...');
  await download('https://videos.pexels.com/video-files/9554338/9554338-hd_1280_720_30fps.mp4', dest);
  console.log('Saved to:', dest);
  const stat = fs.statSync(dest);
  console.log('File size:', (stat.size / (1024 * 1024)).toFixed(2), 'MB');
}
run();
