const https = require('https');

https.get('https://www.pexels.com/video/an-aerial-view-of-a-house-under-construction-9554338/', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
}, res => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    const urls = body.match(/https:\/\/videos\.pexels\.com\/video-files\/[^\s"']+/g) || [];
    console.log('Videos.pexels urls:', [...new Set(urls)]);
  });
});
