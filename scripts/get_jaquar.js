const https = require('https');

https.get('https://www.jaquar.com', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const m = data.match(/https?:\/\/[^"']+\/(?:logo|brand)[^"']*/gi) || [];
    console.log('Jaquar matches:', m.slice(0, 10));
    const imgs = data.match(/<img[^>]+src="([^">]+)"[^>]*alt="[^"]*jaquar[^"]*"[^>]*>/gi) || [];
    console.log('Jaquar img tags:', imgs);
  });
});
