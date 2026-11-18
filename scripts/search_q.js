const https = require('https');

https.get(`https://mixkit.co/free-stock-video/?q=construction`, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    const matches = body.match(/https:\/\/assets\.mixkit\.co\/videos\/(\d+)\/\1-720\.mp4/g) || [];
    console.log('Matches for ?q=construction:', [...new Set(matches)]);
    const titles = body.match(/free-stock-video\/([a-z0-9-]+)-(\d+)\//g) || [];
    console.log('Titles:', [...new Set(titles)].slice(0, 15));
  });
});
