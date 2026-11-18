const https = require('https');

https.get('https://mixkit.co/free-stock-video/architect/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    const regex = /"https:\/\/mixkit\.co\/free-stock-video\/([^"]+)-(\d+)\/#video"/g;
    let m;
    while ((m = regex.exec(body)) !== null) {
      console.log(`Slug: ${m[1]}, ID: ${m[2]}`);
    }
  });
});
