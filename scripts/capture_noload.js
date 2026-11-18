const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb';

const pages = [
  { name: 'live_hero_90px_active.png', url: 'http://localhost:3000?noload=1', h: 1800 },
  { name: 'live_about_deepak_card.png', url: 'http://localhost:3000/about?noload=1', h: 2600 }
];

for (const p of pages) {
  try {
    const dest = path.join(outDir, p.name);
    execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3000 --window-size=1440,${p.h} --screenshot="${dest}" "${p.url}"`);
    console.log('Saved', p.name, fs.statSync(dest).size);
  } catch(e) {
    console.error('Error', p.name, e.message);
  }
}
