const { execSync } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_hero_fitted_view.png';

execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=2000 --window-size=1440,820 --screenshot="${dest}" "http://localhost:3000/?noload=1"`);
console.log('Saved live_hero_fitted_view.png, size:', fs.statSync(dest).size);
