const { execSync } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_insta_5_hires_final.png';

execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=2500 --window-size=1440,900 --screenshot="${dest}" "http://localhost:3000/?noload=1#instagram"`);
console.log('Saved live_insta_5_hires_final.png, size:', fs.statSync(dest).size);
