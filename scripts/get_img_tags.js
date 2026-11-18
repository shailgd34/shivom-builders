const https = require('https');

async function getImgTags(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        const matches = body.match(/<img[^>]+src="([^">]+)"[^>]*>/gi) || [];
        console.log(`Images on ${url}:`, matches.slice(0, 8));
        resolve();
      });
    }).on('error', () => resolve());
  });
}

async function run() {
  await getImgTags('https://www.ultratechcement.com');
  await getImgTags('https://www.ambujacement.com');
}
run();
