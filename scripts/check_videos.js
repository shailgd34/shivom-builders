const https = require('https');
const fs = require('fs');

const candidates = [
  { id: '1439', url: 'https://assets.mixkit.co/videos/1439/1439-720.mp4', desc: '1439' },
  { id: '4010', url: 'https://assets.mixkit.co/videos/4010/4010-720.mp4', desc: '4010' },
  { id: '25480', url: 'https://assets.mixkit.co/videos/25480/25480-720.mp4', desc: '25480' }
];

async function checkDetails() {
  https.get('https://mixkit.co/free-stock-video/construction/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    let body = '';
    res.on('data', c => body += c);
    res.on('end', () => {
      // Find titles or alt text around 1439, 4010, 25480
      for (const id of ['1439', '4010', '25480', '25481', '25479', '25485', '41738', '41739']) {
        const idx = body.indexOf(id);
        if (idx !== -1) {
          const slice = body.substring(Math.max(0, idx - 150), Math.min(body.length, idx + 150));
          console.log(`ID ${id}:`, slice.replace(/\s+/g, ' '));
        }
      }
    });
  });
}
checkDetails();
