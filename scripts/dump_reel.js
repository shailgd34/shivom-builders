const { execSync } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const url = 'https://www.instagram.com/reel/DcVcO0RESq_/';

try {
  const out = execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=6000 --dump-dom "${url}"`, { maxBuffer: 10 * 1024 * 1024 }).toString();
  console.log('Out length:', out.length);
  fs.writeFileSync('C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/dumped_instagram.html', out);
  const title = out.match(/<title>([^<]+)<\/title>/);
  console.log('Title:', title ? title[1] : 'none');
} catch (e) {
  console.error('Error:', e.message);
}
