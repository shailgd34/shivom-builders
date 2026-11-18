const https = require('https');
const fs = require('fs');
const path = require('path');

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('HTTP status ' + res.statusCode));
      }
      const f = fs.createWriteStream(dest);
      res.pipe(f);
      f.on('finish', () => f.close(() => resolve()));
    }).on('error', reject);
  });
}

async function run() {
  const dir = path.join(__dirname, '../public/videos');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  console.log('Downloading 25480...');
  await downloadFile('https://assets.mixkit.co/videos/25480/25480-720.mp4', path.join(dir, 'construction-frames.mp4'));
  console.log('Done 25480!');

  console.log('Downloading 4010...');
  await downloadFile('https://assets.mixkit.co/videos/4010/4010-720.mp4', path.join(dir, 'construction-aerial.mp4'));
  console.log('Done 4010!');
}
run();
