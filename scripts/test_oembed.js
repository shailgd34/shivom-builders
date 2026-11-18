const https = require('https');

function get(u) {
  https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    if (res.headers.location) {
      console.log('Redirecting to:', res.headers.location);
      return get(res.headers.location);
    }
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      console.log('Data:', data.substring(0, 500));
    });
  });
}

get('https://api.instagram.com/oembed/?url=https://www.instagram.com/reel/DcVcO0RESq_/');
