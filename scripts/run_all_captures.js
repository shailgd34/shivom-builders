const { execSync } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const alignDest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_align_check.png';
const serviceDest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_services_black_arrow.png';
const heroDest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_hero_static_image.png';

execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=2000 --window-size=1440,900 --screenshot="${heroDest}" "http://localhost:3000/?noload=1"`);
console.log('Saved hero static image:', fs.statSync(heroDest).size);

execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3000 --window-size=1440,900 --screenshot="${alignDest}" "file:///C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/scroll_align_harness.html"`);
console.log('Saved align check:', fs.statSync(alignDest).size);

execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3000 --window-size=1440,900 --screenshot="${serviceDest}" "file:///C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/scroll_service_harness.html"`);
console.log('Saved services check:', fs.statSync(serviceDest).size);
