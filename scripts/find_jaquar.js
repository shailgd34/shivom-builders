const https = require('https');

https.get('https://www.jaquar.com/en-in', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    const urls = body.match(/https?:\/\/[^\s"']+\.(?:svg|png|webp)/gi) || [];
    console.log('Jaquar urls:', [...new Set(urls)].filter(u => u.includes('logo') || u.includes('header') || u.includes('jaquar') || u.includes('brand')));
  });
});
