const { execSync } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const heroCardDest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_hero_aligned_with_card.png';

execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=2000 --window-size=1440,900 --screenshot="${heroCardDest}" "http://localhost:3000/?noload=1"`);
console.log('Saved hero with card, size:', fs.statSync(heroCardDest).size);
