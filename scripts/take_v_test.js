const { execSync } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\v_test.png';
execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3000 --window-size=1100,500 --screenshot="${dest}" http://localhost:3000/test_v.html`);
console.log('Done!');
