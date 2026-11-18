const { execSync } = require('child_process');
const fs = require('fs');

// We create a standalone viewer HTML that renders InstagramFeed with the real images
const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
  </style>
</head>
<body class="bg-[#131313] text-white p-8">
  <div class="max-w-[1335px] mx-auto">
    <div class="flex items-end justify-between pb-8 border-b border-white/10 mb-6">
      <div>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/[0.08] border border-white/10 text-[11px] font-mono uppercase tracking-[0.08em] text-[#ff2600] font-medium mb-3">
          <span>On-Site Journeys</span>
        </div>
        <h2 class="text-[36px] font-medium tracking-tight text-white leading-tight">
          Follow us on Instagram, <span class="text-white/55">@shivom.builders</span>
        </h2>
      </div>
    </div>

    <!-- 5 High-Resolution Tall Portrait Tiles -->
    <div class="grid grid-cols-5 gap-4">
      <div class="relative aspect-[4/5] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/15 shadow-lg">
        <img src="file:///E:/Portfolio/Shivom Builders/public/images/about/welcome-duplex-clean.jpg" class="w-full h-full object-cover" />
        <div class="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white text-xs">▶</div>
        <div class="absolute bottom-2.5 left-2.5 right-2.5 bg-black/60 backdrop-blur-md rounded px-2.5 py-1 text-[11px] font-mono text-white/90">Duplex Handover</div>
      </div>

      <div class="relative aspect-[4/5] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/15 shadow-lg">
        <img src="file:///E:/Portfolio/Shivom Builders/public/images/projects/project-07.jpg" class="w-full h-full object-cover" />
        <div class="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-black/60 text-[10px] uppercase font-mono text-white">Luxury Villa</div>
        <div class="absolute bottom-2.5 left-2.5 right-2.5 bg-black/60 backdrop-blur-md rounded px-2.5 py-1 text-[11px] font-mono text-white/90">Nipania, Indore</div>
      </div>

      <div class="relative aspect-[4/5] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/15 shadow-lg">
        <img src="file:///E:/Portfolio/Shivom Builders/public/images/projects/project-13.jpg" class="w-full h-full object-cover" />
        <div class="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white text-xs">▶</div>
        <div class="absolute bottom-2.5 left-2.5 right-2.5 bg-black/60 backdrop-blur-md rounded px-2.5 py-1 text-[11px] font-mono text-white/90">Elevation Reveal</div>
      </div>

      <div class="relative aspect-[4/5] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/15 shadow-lg">
        <img src="file:///E:/Portfolio/Shivom Builders/public/images/projects/project-16.jpg" class="w-full h-full object-cover" />
        <div class="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-black/60 text-[10px] uppercase font-mono text-white">Turnkey Home</div>
        <div class="absolute bottom-2.5 left-2.5 right-2.5 bg-black/60 backdrop-blur-md rounded px-2.5 py-1 text-[11px] font-mono text-white/90">Bypass Road</div>
      </div>

      <div class="relative aspect-[4/5] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/15 shadow-lg">
        <img src="file:///E:/Portfolio/Shivom Builders/public/images/hero/hero-reveal-base.jpg" class="w-full h-full object-cover" />
        <div class="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white text-xs">▶</div>
        <div class="absolute bottom-2.5 left-2.5 right-2.5 bg-black/60 backdrop-blur-md rounded px-2.5 py-1 text-[11px] font-mono text-white/90">Luxury Villa</div>
      </div>
    </div>
  </div>
</body>
</html>
`;

const htmlPath = 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/insta_hires_preview.html';
fs.writeFileSync(htmlPath, html);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_insta_hires_rendered.png';
execSync(`"${chromePath}" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=2000 --window-size=1400,600 --screenshot="${dest}" "file:///${htmlPath}"`);
console.log('Saved live_insta_hires_rendered.png, size:', fs.statSync(dest).size);
