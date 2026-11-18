const https = require('https');

async function getCommons(page, cb) {
  https.get(`https://commons.wikimedia.org/wiki/${page}`, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    let body = '';
    res.on('data', c => body += c);
    res.on('end', () => {
      const m = body.match(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^\s"']+\.(?:svg|png)/g) || [];
      cb([...new Set(m)]);
    });
  });
}

getCommons('File:Havells_Logo.svg', urls => console.log('Havells:', urls));
getCommons('File:Kohler_Co._logo.svg', urls => console.log('Kohler:', urls));
