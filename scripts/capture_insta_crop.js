const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb';

const harness = `
<!DOCTYPE html>
<html>
<body style="margin:0;overflow:hidden;">
  <iframe id="f" src="http://localhost:3000?noload=1" style="width:1440px;height:7500px;border:none;"></iframe>
  <script>
    setTimeout(() => {
      window.scrollTo(0, 4100);
    }, 1500);
  </script>
</body>
</html>
`;
const harnessPath = path.join(outDir, 'scroll_insta_harness.html');
fs.writeFileSync(harnessPath, harness);

const dest = path.join(outDir, 'live_instagram_cropped.png');
execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3500 --window-size=1440,900 --screenshot="${dest}" "file:///${harnessPath.replace(/\\\\/g, '/')}"`);
console.log('Saved live_instagram_cropped.png', fs.statSync(dest).size);
