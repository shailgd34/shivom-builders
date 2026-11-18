const https = require('https');
const fs = require('fs');
const path = require('path');

const list = [
  'https://assets.mixkit.co/videos/25480/25480-thumb-720-0.jpg',
  'https://assets.mixkit.co/videos/4010/4010-thumb-720-0.jpg',
  'https://assets.mixkit.co/videos/14729/14729-thumb-720-0.jpg'
];

async function run() {
  for (const u of list) {
    const filename = path.basename(u);
    const dest = path.join('C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb', filename);
    await new Promise((resolve) => {
      https.get(u, res => {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      });
    });
    console.log('Saved:', filename);
  }
}
run();
