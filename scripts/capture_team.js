const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb';

const dest = path.join(outDir, 'live_about_team_full.png');
execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3000 --window-size=1440,4200 --screenshot="${dest}" http://localhost:3000/about`);
console.log('Saved live_about_team_full.png', fs.statSync(dest).size);
