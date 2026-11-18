const { execSync } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const heroDest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_herobanner_video.png';

execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=2500 --window-size=1440,820 --screenshot="${heroDest}" "http://localhost:3000/?noload=1"`);
console.log('Saved hero video screenshot:', fs.statSync(heroDest).size);
