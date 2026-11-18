const https = require('https');
const fs = require('fs');

async function getSiteLogo(url, regex, dest) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        const matches = body.match(regex) || [];
        console.log(`Matches for ${url}:`, [...new Set(matches)]);
        resolve(matches);
      });
    }).on('error', e => {
      console.log('Error', url, e.message);
      resolve([]);
    });
  });
}

async function run() {
  await getSiteLogo('https://www.ultratechcement.com', /https?:\/\/[^"']+\/(?:logo|brand)[^"']*\.(?:png|svg|webp)/gi);
  await getSiteLogo('https://www.ambujacement.com', /https?:\/\/[^"']+\/(?:logo|brand)[^"']*\.(?:png|svg|webp)/gi);
}
run();
