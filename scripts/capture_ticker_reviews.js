const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb';

try {
  const dest = path.join(outDir, 'live_homepage_full_stack.png');
  execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3000 --window-size=1440,3600 --screenshot="${dest}" http://localhost:3000`);
  console.log('Saved live_homepage_full_stack.png', fs.statSync(dest).size);
} catch(e) {
  console.error('Error', e.message);
}
