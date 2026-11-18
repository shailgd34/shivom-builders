const https = require('https');

async function searchMixkit(term) {
  return new Promise((resolve) => {
    https.get(`https://mixkit.co/free-stock-video/${term}/`, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        const matches = body.match(/https:\/\/assets\.mixkit\.co\/videos\/(\d+)\/\1-720\.mp4/g) || [];
        const unique = [...new Set(matches)];
        console.log(`Term ${term} found:`, unique);
        const titles = body.match(/free-stock-video\/([a-z0-9-]+)-(\d+)\/#video/g) || [];
        console.log(`Titles for ${term}:`, [...new Set(titles)].slice(0, 10));
        resolve();
      });
    }).on('error', () => resolve());
  });
}

async function run() {
  await searchMixkit('building');
  await searchMixkit('house');
}
run();
