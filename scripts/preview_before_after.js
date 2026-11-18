const { execSync } = require('child_process');
const fs = require('fs');

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #0e0e0e; color: #fff; }
  </style>
</head>
<body class="p-8">
  <div class="max-w-[1336px] mx-auto">
    <div class="relative w-full h-[550px] rounded-[10px] overflow-hidden border border-white/15 bg-zinc-950 select-none">
      <!-- BEFORE IMAGE -->
      <div class="absolute inset-0 w-full h-full">
        <img src="file:///E:/Portfolio/Shivom Builders/public/images/hero/before.png" class="w-full h-full object-cover" />
        <div class="absolute top-6 left-6 z-10">
          <span class="px-3.5 py-1.5 rounded-[4px] bg-black/80 backdrop-blur border border-white/15 text-white font-mono text-[12px] uppercase font-semibold tracking-wider">
            BEFORE: Empty Plot & Foundation
          </span>
        </div>
      </div>

      <!-- AFTER IMAGE (split 50%) -->
      <div style="clip-path: inset(0 0 0 50%);" class="absolute inset-0 w-full h-full">
        <img src="file:///E:/Portfolio/Shivom Builders/public/images/hero/after.png" class="w-full h-full object-cover" />
        <div class="absolute top-6 right-6 z-10">
          <span class="px-3.5 py-1.5 rounded-[4px] bg-[#ff2600] text-white font-mono text-[12px] uppercase font-semibold tracking-wider shadow-lg">
            AFTER: Completed Luxury Villa
          </span>
        </div>
      </div>

      <!-- Divider line at 50% -->
      <div style="left: 50%;" class="absolute top-0 bottom-0 w-[2px] bg-white z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]">
        <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs shadow-2xl">
          ⟷
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

const htmlPath = 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/preview_before_after.html';
fs.writeFileSync(htmlPath, html);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_before_after_verified.png';
execSync(`"${chromePath}" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=2000 --window-size=1400,650 --screenshot="${dest}" "file:///${htmlPath}"`);
console.log('Saved live_before_after_verified.png, size:', fs.statSync(dest).size);
