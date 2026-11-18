const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb';

try {
  const dest1 = path.join(outDir, 'live_hero_video_3d.png');
  execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=2000 --window-size=1440,900 --screenshot="${dest1}" http://localhost:3000`);
  console.log('Hero screenshot created:', fs.existsSync(dest1), fs.statSync(dest1).size);
} catch(e) {
  console.error('Error hero:', e.message);
}
