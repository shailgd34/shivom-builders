const { execSync } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const heroDest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_hero_gradient_l2r.png';
const instaDest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_insta_hires_5.png';

// 1. Capture Hero
execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=2000 --window-size=1440,900 --screenshot="${heroDest}" "http://localhost:3000/?noload=1"`);
console.log('Saved hero screenshot:', fs.statSync(heroDest).size);

// 2. Capture Instagram Feed
const scrollHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#131313;">
  <iframe id="app" src="http://localhost:3000/?noload=1" style="width:1440px;height:9000px;border:none;"></iframe>
  <script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        const frame = document.getElementById('app');
        try {
          const doc = frame.contentDocument || frame.contentWindow.document;
          const section = doc.querySelector('section[data-framer-name="Instagram Feed"]');
          if (section) {
            const rect = section.getBoundingClientRect();
            window.scrollTo(0, rect.top + window.scrollY - 40);
          }
        } catch(e) {}
      }, 800);
    });
  </script>
</body>
</html>
`;
const scrollPath = 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/scroll_insta_hires.html';
fs.writeFileSync(scrollPath, scrollHtml);

execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3000 --window-size=1440,900 --screenshot="${instaDest}" "file:///${scrollPath}"`);
console.log('Saved insta screenshot:', fs.statSync(instaDest).size);
