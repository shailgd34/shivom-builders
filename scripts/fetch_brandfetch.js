const https = require('https');
const fs = require('fs');
const path = require('path');

const domains = [
  { name: 'kajaria', domain: 'kajariaceramics.com' },
  { name: 'jaquar', domain: 'jaquar.com' },
  { name: 'havells', domain: 'havells.com' },
  { name: 'kohler', domain: 'kohler.com' },
  { name: 'somany', domain: 'somanyceramics.com' },
  { name: 'tatasteel', domain: 'tatasteel.com' }
];

async function checkBrandfetch() {
  for (const d of domains) {
    const url = `https://cdn.brandfetch.io/${d.domain}/w/400/h/400/logo`;
    const dest = path.join('E:/Portfolio/Shivom Builders/public/images/partners', `${d.name}.png`);
    await new Promise((resolve) => {
      https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          https.get(res.headers.location, res2 => {
            const f = fs.createWriteStream(dest);
            res2.pipe(f);
            f.on('finish', () => f.close(() => {
              console.log(`Saved redirect ${d.name}, size:`, fs.statSync(dest).size);
              resolve();
            }));
          });
          return;
        }
        if (res.statusCode === 200) {
          const f = fs.createWriteStream(dest);
          res.pipe(f);
          f.on('finish', () => f.close(() => {
            console.log(`Saved ${d.name}, size:`, fs.statSync(dest).size);
            resolve();
          }));
        } else {
          console.log(`Status for ${d.name}:`, res.statusCode);
          resolve();
        }
      }).on('error', e => {
        console.log(`Error ${d.name}:`, e.message);
        resolve();
      });
    });
  }
}
checkBrandfetch();
