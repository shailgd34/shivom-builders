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
  const dir = 'E:/Portfolio/Shivom Builders/public/images/partners';
  
  try {
    await download('https://www.kajariaceramics.com/images/logo-dark.svg', path.join(dir, 'kajaria.svg'));
    console.log('Saved kajaria.svg, size:', fs.statSync(path.join(dir, 'kajaria.svg')).size);
  } catch(e) {
    console.log('Failed kajaria:', e.message);
  }

  try {
    await download('https://www.somanyceramics.com/logo-header.svg', path.join(dir, 'somany.svg'));
    console.log('Saved somany.svg, size:', fs.statSync(path.join(dir, 'somany.svg')).size);
  } catch(e) {
    console.log('Failed somany:', e.message);
  }
}
run();
