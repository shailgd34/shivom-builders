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
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #ffffff; }
  </style>
</head>
<body class="p-0 m-0">
  <!-- Navbar at top (with aligned container) -->
  <header class="p-[10px] sm:pt-4 bg-white/90 border-b border-zinc-200">
    <div class="max-w-[1336px] mx-auto px-[26px] flex items-center justify-between">
      <div class="flex items-center">
        <img src="file:///E:/Portfolio/Shivom Builders/public/images/logo.webp" class="h-10 w-[160px] object-contain object-left" />
      </div>
      <div class="flex items-center gap-2">
        <div class="px-4 py-2 rounded-[6px] bg-[#262626] text-white text-[13px] font-medium flex gap-3">
          <span>Home</span><span>About</span><span>Services</span><span>Projects</span><span>News</span>
        </div>
        <div class="flex items-center gap-2 pl-4 pr-1.5 py-2 rounded-[6px] bg-[#ff2600] text-white text-[12px] font-mono font-medium uppercase">
          <span>Get estimate</span>
          <div class="w-6 h-6 rounded-[4px] bg-white text-[#ff2600] flex items-center justify-center font-bold">→</div>
        </div>
      </div>
    </div>
  </header>

  <!-- About Section -->
  <div class="max-w-[1336px] mx-auto pt-[40px] px-[26px] pb-[60px]">
    <div class="grid grid-cols-12 gap-8 pb-10">
      <div class="col-span-3">
        <span class="inline-flex items-center px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase text-[#ff2600] font-medium">About us</span>
      </div>
      <div class="col-span-9">
        <h2 class="text-[34px] font-medium tracking-tight text-[#131313] leading-snug">
          At Shivom Builders & Developers, we craft spaces that inspire and endure.
          <span class="text-[#6e6e6e] font-normal">With decades of construction excellence in Indore, we combine trusted engineering, integrity, and genuine materials to build homes that stand the test of time.</span>
        </h2>
      </div>
    </div>

    <!-- 2 Cards -->
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-5 p-8 rounded-[10px] bg-[#f2f2f2] border border-[#e4e4e4]">
        <div class="flex justify-between pb-6 border-b border-[#e4e4e4] font-mono text-[12px]">
          <span class="uppercase font-medium text-[#131313]">On-time handover</span>
          <span class="text-[#6e6e6e]">2016 — 2026</span>
        </div>
        <div class="py-6 flex items-baseline gap-1">
          <span class="text-[72px] font-medium text-[#131313] leading-none">98</span>
          <span class="text-[36px] font-medium text-[#ff2600] leading-none">%</span>
        </div>
        <div class="space-y-4 pb-6 border-b border-[#e4e4e4]">
          <div>
            <div class="flex justify-between text-[12px] font-mono mb-1 text-[#131313]">
              <span>Shivom — 49 of last 50</span>
              <span class="text-[#ff2600] font-bold">98%</span>
            </div>
            <div class="h-1.5 rounded-full bg-[#ff2600] w-[98%]"></div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 py-4 border-b border-[#e4e4e4]">
          <div><p class="text-[26px] font-medium text-[#131313]">100<span class="text-[#ff2600]">+</span></p><p class="text-[12px] font-mono text-[#6e6e6e]">Delivered</p></div>
          <div><p class="text-[26px] font-medium text-[#ff2600]">0</p><p class="text-[12px] font-mono text-[#6e6e6e]">Cost Overruns</p></div>
          <div><p class="text-[26px] font-medium text-[#131313]">150K+</p><p class="text-[12px] font-mono text-[#6e6e6e]">Sq Ft Built</p></div>
        </div>
        <p class="text-[14px] text-[#4a4a4a] mt-4 mb-4">One accountable team from pre-construction to handover.</p>
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-black text-white text-[12px] font-mono uppercase font-medium">
          <span>Learn more</span> →
        </div>
      </div>

      <!-- Right Card with Shivom Reel Looping Video -->
      <div class="col-span-7 relative min-h-[500px] rounded-[10px] overflow-hidden border border-[#e4e4e4] flex flex-col justify-end p-6">
        <img src="file:///E:/Portfolio/Shivom Builders/public/images/about/shivom-reel-hero.jpg" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
        <div class="relative z-10 p-6 rounded-[10px] bg-[rgba(30,30,30,0.5)] backdrop-blur-md border border-white/15 text-white">
          <p class="text-[20px] font-medium leading-relaxed mb-4">
            “A building is only as good as the plan behind it. We obsess over the plan, so the build is the easy part.”
          </p>
          <div class="flex items-center justify-between border-t border-white/15 pt-3">
            <div>
              <p class="font-medium text-white text-[15px]">Deepak Rajak</p>
              <p class="text-[12px] font-mono text-white/60">Owner & Founder, Shivom Builder</p>
            </div>
            <div class="px-3 py-1 rounded bg-white/10 text-[11px] font-mono">Indore, MP</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

const htmlPath = 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/preview_about_align.html';
fs.writeFileSync(htmlPath, html);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\preview_about_align.png';
execSync(`"${chromePath}" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=2000 --window-size=1400,900 --screenshot="${dest}" "file:///${htmlPath}"`);
console.log('Saved preview_about_align.png, size:', fs.statSync(dest).size);
