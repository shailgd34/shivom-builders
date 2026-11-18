const https = require('https');

https.get('https://www.pexels.com/search/videos/building%20houses/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, res => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    const urls = body.match(/https:\/\/(?:images|player)\.pexels\.com\/video-files\/[^\s"']+/g) || [];
    console.log('Pexels video files:', [...new Set(urls)].slice(0, 5));
    const vids = body.match(/\/video\/[a-z0-9-]+-(\d+)\//g) || [];
    console.log('Video links:', [...new Set(vids)].slice(0, 10));
  });
});
