const { execSync } = require('child_process');
const fs = require('fs');

const htmlAbout = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#fff;">
  <iframe id="app" src="http://localhost:3000/?noload=1" style="width:1440px;height:7000px;border:none;"></iframe>
  <script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        const frame = document.getElementById('app');
        try {
          const doc = frame.contentDocument || frame.contentWindow.document;
          const el = doc.querySelector('div[data-framer-name="About"]');
          if (el) {
            const rect = el.getBoundingClientRect();
            window.scrollTo(0, rect.top + window.scrollY - 30);
          }
        } catch(e) {}
      }, 800);
    });
  </script>
</body>
</html>
`;
fs.writeFileSync('E:/Portfolio/Shivom Builders/public/test_about.html', htmlAbout);

const htmlServices = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f2f2f2;">
  <iframe id="app" src="http://localhost:3000/?noload=1" style="width:1440px;height:7000px;border:none;"></iframe>
  <script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        const frame = document.getElementById('app');
        try {
          const doc = frame.contentDocument || frame.contentWindow.document;
          const el = doc.querySelector('section[data-framer-name="Services"]');
          if (el) {
            const rect = el.getBoundingClientRect();
            window.scrollTo(0, rect.top + window.scrollY - 30);
          }
        } catch(e) {}
      }, 800);
    });
  </script>
</body>
</html>
`;
fs.writeFileSync('E:/Portfolio/Shivom Builders/public/test_services.html', htmlServices);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const alignDest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_about_verified.png';
const serviceDest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_services_verified.png';

execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3500 --window-size=1440,900 --screenshot="${alignDest}" "http://localhost:3000/test_about.html"`);
console.log('Saved about screenshot:', fs.statSync(alignDest).size);

execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3500 --window-size=1440,900 --screenshot="${serviceDest}" "http://localhost:3000/test_services.html"`);
console.log('Saved services screenshot:', fs.statSync(serviceDest).size);
