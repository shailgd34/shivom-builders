const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb';

const dest = path.join(outDir, 'live_instagram_5_tiles.png');
// We take a full page screenshot or scrolled around Instagram section
execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3000 --window-size=1440,5400 --screenshot="${dest}" "http://localhost:3000?noload=1"`);
console.log('Saved live_instagram_5_tiles.png', fs.statSync(dest).size);
