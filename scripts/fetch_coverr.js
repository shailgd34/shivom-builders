const https = require('https');

https.get('https://coverr.co/s/construction%20site', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    const mp4s = body.match(/https:\/\/[^"']+\.mp4[^"']*/g) || [];
    console.log('Coverr mp4s:', mp4s.slice(0, 10));
  });
});
