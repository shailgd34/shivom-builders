const https = require('https');
const fs = require('fs');

https.get('https://mixkit.co/free-stock-video/construction/', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    const matches = body.match(/https:\/\/assets\.mixkit\.co\/videos\/[^\s"']+/g) || [];
    console.log('Matches found:', matches.length);
    console.log(matches.slice(0, 10));
  });
}).on('error', e => console.error(e));
