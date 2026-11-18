const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb';

const harness = `
<!DOCTYPE html>
<html>
<body style="margin:0;overflow:hidden;">
  <iframe id="f" src="http://localhost:3000/about?noload=1" style="width:1440px;height:4500px;border:none;"></iframe>
  <script>
    setTimeout(() => {
      window.scrollTo(0, 1900);
    }, 1500);
  </script>
</body>
</html>
`;
const harnessPath = path.join(outDir, 'scroll_about_harness.html');
fs.writeFileSync(harnessPath, harness);

const dest = path.join(outDir, 'live_about_deepak_fullscreen.png');
execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=4000 --window-size=1440,1400 --screenshot="${dest}" "file:///${harnessPath.replace(/\\\\/g, '/')}"`);
console.log('Saved live_about_deepak_fullscreen.png', fs.statSync(dest).size);
