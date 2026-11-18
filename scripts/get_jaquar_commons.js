const https = require('https');

https.get('https://commons.wikimedia.org/wiki/File:Official_Jaquar_Group_Logo.png', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    const m = body.match(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^\s"']+\.png/g) || [];
    console.log('Jaquar upload matches:', [...new Set(m)]);
  });
});
