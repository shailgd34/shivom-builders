const https = require('https');

https.get('https://coverr.co/s/house%20construction', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    const regex = /https:\/\/cdn\.coverr\.co\/videos\/coverr-([a-z0-9-]+)\/1080p\.mp4/g;
    let m;
    const items = new Set();
    while ((m = regex.exec(body)) !== null) {
      items.add(m[0]);
    }
    console.log('Found:', Array.from(items));
  });
});
