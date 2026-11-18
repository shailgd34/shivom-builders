const { execSync } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const alignDest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_align_check.png';
const serviceDest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_services_black_arrow.png';

// 1. Capture About with Navbar
const scrollHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#fff;">
  <iframe id="app" src="http://localhost:3000/?noload=1" style="width:1440px;height:9000px;border:none;"></iframe>
  <script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        const frame = document.getElementById('app');
        try {
          const doc = frame.contentDocument || frame.contentWindow.document;
          const section = doc.querySelector('div[data-framer-name="About"]');
          if (section) {
            const rect = section.getBoundingClientRect();
            window.scrollTo(0, rect.top + window.scrollY - 80);
          }
        } catch(e) {}
      }, 900);
    });
  </script>
</body>
</html>
`;
const scrollPath = 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/scroll_align_harness.html';
fs.writeFileSync(scrollPath, scrollHtml);

// 2. Services HTML harness
const serviceHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f2f2f2;">
  <iframe id="app" src="http://localhost:3000/?noload=1" style="width:1440px;height:9000px;border:none;"></iframe>
  <script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        const frame = document.getElementById('app');
        try {
          const doc = frame.contentDocument || frame.contentWindow.document;
          const section = doc.querySelector('section[data-framer-name="Services"]');
          if (section) {
            const rect = section.getBoundingClientRect();
            window.scrollTo(0, rect.top + window.scrollY - 40);
          }
        } catch(e) {}
      }, 900);
    });
  </script>
</body>
</html>
`;
const servicePath = 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/scroll_service_harness.html';
fs.writeFileSync(servicePath, serviceHtml);

console.log('Harnesses created');
