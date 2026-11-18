const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb';

// Let's create a small wrapper that sets sessionStorage before rendering or captures
const harnessHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;">
  <script>
    sessionStorage.setItem("shivom_loaded", "true");
    location.href = "http://localhost:3000";
  </script>
</body>
</html>
`;
const harnessPath = path.join(outDir, 'load_harness.html');
fs.writeFileSync(harnessPath, harnessHtml);

try {
  const destHero = path.join(outDir, 'live_hero_90px_content.png');
  execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=3000 --window-size=1440,1600 --screenshot="${destHero}" "file:///${harnessPath.replace(/\\\\/g, '/')}"`);
  console.log('Saved live_hero_90px_content.png', fs.statSync(destHero).size);
} catch(e) {
  console.error('Error hero:', e.message);
}

// About page
const aboutHarness = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;">
  <script>
    sessionStorage.setItem("shivom_loaded", "true");
    location.href = "http://localhost:3000/about";
  </script>
</body>
</html>
`;
const aboutHarnessPath = path.join(outDir, 'load_about_harness.html');
fs.writeFileSync(aboutHarnessPath, aboutHarness);

try {
  const destAbout = path.join(outDir, 'live_about_deepak_card.png');
  execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=4000 --window-size=1440,2400 --screenshot="${destAbout}" "file:///${aboutHarnessPath.replace(/\\\\/g, '/')}"`);
  console.log('Saved live_about_deepak_card.png', fs.statSync(destAbout).size);
} catch(e) {
  console.error('Error about:', e.message);
}
