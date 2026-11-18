const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const html = `
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#131313] p-10 text-white font-sans">
  <div class="max-w-[1335px] mx-auto">
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      <div class="relative aspect-[3/4] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/15">
        <img src="/images/about/welcome-duplex-clean.jpg" class="w-full h-full object-cover" />
        <div class="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white">▶</div>
      </div>
      <div class="relative aspect-[3/4] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/15">
        <img src="/images/projects/real-project-03.jpg" class="w-full h-full object-cover" />
        <div class="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-black/60 text-[10px] uppercase font-mono">Luxury Villa</div>
      </div>
      <div class="relative aspect-[3/4] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/15">
        <img src="/images/projects/real-project-01.jpg" class="w-full h-full object-cover" />
        <div class="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white">▶</div>
      </div>
      <div class="relative aspect-[3/4] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/15">
        <img src="/images/projects/real-project-04.jpg" class="w-full h-full object-cover" />
        <div class="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-black/60 text-[10px] uppercase font-mono">Residential</div>
      </div>
      <div class="relative aspect-[3/4] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/15">
        <img src="/images/hero/hero-reveal-base.jpg" class="w-full h-full object-cover" />
        <div class="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white">▶</div>
      </div>
    </div>
  </div>
</body>
</html>
`;
const testPath = 'E:/Portfolio/Shivom Builders/public/test_insta.html';
fs.writeFileSync(testPath, html);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_insta_5_verified.png';
execSync(`"${chromePath}" --headless=new --disable-gpu --virtual-time-budget=2000 --window-size=1440,600 --screenshot="${dest}" "http://localhost:3000/test_insta.html"`);
console.log('Saved live_insta_5_verified.png', fs.statSync(dest).size);
