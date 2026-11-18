const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Let's use node with a small script that scrolls to 1100px and takes screenshot
// Chrome headless supports --screenshot and we can also use CDP or scroll via a small test HTML or node script
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb';

// Let's create an HTML harness with an iframe scrolled to 1100px, or run Chrome with CDP
const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;overflow:hidden;">
  <iframe id="f" src="http://localhost:3000" style="width:1440px;height:4000px;border:none;"></iframe>
  <script>
    setTimeout(() => {
      window.scrollTo(0, 950);
    }, 1500);
  </script>
</body>
</html>
`;
const harnessPath = path.join(outDir, 'scroll_harness.html');
fs.writeFileSync(harnessPath, html);

const destLower = path.join(outDir, 'live_lower_sections.png');
execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=4000 --window-size=1440,1600 --screenshot="${destLower}" "file:///${harnessPath.replace(/\\\\/g, '/')}"`);
console.log('Done lower screenshot:', fs.existsSync(destLower));
