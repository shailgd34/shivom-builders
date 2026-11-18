const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb';

// We can take a screenshot with virtual-time-budget=4000
const pages = [
  { name: 'live_hero_90px.png', url: 'http://localhost:3000', h: 1800 },
  { name: 'live_about_team_deepak.png', url: 'http://localhost:3000/about', h: 2200 }
];

for (const p of pages) {
  try {
    const dest = path.join(outDir, p.name);
    // Setting window size and virtual-time-budget
    execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=4000 --window-size=1440,${p.h} --screenshot="${dest}" ${p.url}`);
    console.log('Saved', p.name, fs.statSync(dest).size);
  } catch(e) {
    console.error('Error', p.name, e.message);
  }
}
