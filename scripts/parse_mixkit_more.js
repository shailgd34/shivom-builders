const https = require('https');

for (const slug of ['renovation', 'home', 'modern-house', 'interior-design']) {
  https.get(`https://mixkit.co/free-stock-video/${slug}/`, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    let body = '';
    res.on('data', c => body += c);
    res.on('end', () => {
      const regex = /"https:\/\/mixkit\.co\/free-stock-video\/([^"]+)-(\d+)\/#video"/g;
      let m;
      while ((m = regex.exec(body)) !== null) {
        console.log(`[${slug}] ${m[1]} -> ${m[2]}`);
      }
    });
  });
}
