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
  
  console.log('Downloading official UltraTech...');
  await download('https://www.ultratechcement.com/content/experience-fragments/ultratechcement/in/ihb/header/master1/_jcr_content/root/container_copy_86747432/container/image_copy.coreimg.png/1727338314222/ultratech-cement-logo.png', path.join(dir, 'ultratech.png'));
  console.log('Done ultratech! Size:', fs.statSync(path.join(dir, 'ultratech.png')).size);

  console.log('Downloading official Ambuja...');
  await download('https://www.ambujacement.com/-/media/Project/AmbujaLimited/Common/Logo/Ambuja-Footer-1.ashx', path.join(dir, 'ambuja.png'));
  console.log('Done ambuja! Size:', fs.statSync(path.join(dir, 'ambuja.png')).size);
}
run();
