const https = require('https');
const fs = require('fs');

async function getSiteImg(url, name) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        const matches = body.match(/<img[^>]+src="([^">]+)"[^>]*>/gi) || [];
        console.log(`Images on ${name} (${url}):`, matches.slice(0, 5));
        resolve();
      });
    }).on('error', e => {
      console.log('Error', name, e.message);
      resolve();
    });
  });
}

async function run() {
  await getSiteImg('https://tatatiscon.co.in', 'TataTiscon');
  await getSiteImg('https://jaquar.com/en-in', 'Jaquar');
}
run();
