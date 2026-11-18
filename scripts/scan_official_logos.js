const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targets = [
  { name: 'kajaria', url: 'https://www.kajariaceramics.com' },
  { name: 'jaquar', url: 'https://www.jaquar.com' },
  { name: 'havells', url: 'https://www.havells.com' },
  { name: 'somany', url: 'https://www.somanyceramics.com' }
];

async function scan() {
  for (const t of targets) {
    try {
      const html = await new Promise((resolve, reject) => {
        https.get(t.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
          let data = '';
          res.on('data', c => data += c);
          res.on('end', () => resolve(data));
        }).on('error', reject);
      });
      const logos = html.match(/https?:\/\/[^"']+\/(?:logo|header)[^"']*\.(?:png|svg|webp)/gi) || [];
      const rels = html.match(/(?:\/[^"']+\/)?(?:logo|brand)[^"']*\.(?:png|svg|webp)/gi) || [];
      console.log(`[${t.name}] logos found:`, [...new Set([...logos, ...rels])].slice(0, 5));
    } catch(e) {
      console.log(`[${t.name}] error:`, e.message);
    }
  }
}
scan();
