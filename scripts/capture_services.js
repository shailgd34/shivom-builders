const { execSync } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const destServices = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_services_compact_animated.png';

try {
  // Capture services section
  execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=2500 --window-size=1400,900 --screenshot="${destServices}" "http://localhost:3000"`);
  console.log('Saved live_services_compact_animated.png, size:', fs.statSync(destServices).size);
} catch (err) {
  console.error('Error capturing screenshot:', err.message);
}

