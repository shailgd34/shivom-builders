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
<body class="p-8">
  <div class="max-w-[1336px] mx-auto">
    <div class="grid grid-cols-3 gap-6">
      <!-- Member 1 -->
      <div class="rounded-[10px] bg-white p-4 border border-[#e4e4e4] shadow-xs flex flex-col justify-between">
        <div>
          <div class="relative w-full aspect-[4/4.5] rounded-[6px] overflow-hidden bg-zinc-900 mb-4">
            <img src="file:///E:/Portfolio/Shivom Builders/public/images/hero/architect-craft.jpg" class="w-full h-full object-cover filter grayscale" />
            <div class="absolute bottom-3 right-3 px-2 py-0.5 rounded-[4px] bg-black/75 text-white/90 text-[10px] font-mono uppercase">8+ Years</div>
          </div>
          <span class="text-[11px] font-mono uppercase text-[#ff2600] font-semibold block mb-1">Team Coordinator & Approvals</span>
          <h4 class="text-[20px] font-semibold text-[#131313] mb-2">Kapil Parmar</h4>
          <p class="text-[13px] text-[#555] leading-relaxed">Coordinates client communications, milestone schedules, and IMC building permissions.</p>
        </div>
      </div>

      <!-- Member 2 -->
      <div class="rounded-[10px] bg-white p-4 border border-[#e4e4e4] shadow-xs flex flex-col justify-between">
        <div>
          <div class="relative w-full aspect-[4/4.5] rounded-[6px] overflow-hidden bg-zinc-900 mb-4">
            <img src="file:///E:/Portfolio/Shivom Builders/public/images/about/team-pramod-patel.jpg" class="w-full h-full object-cover filter grayscale" />
            <div class="absolute bottom-3 right-3 px-2 py-0.5 rounded-[4px] bg-black/75 text-white/90 text-[10px] font-mono uppercase">11+ Years</div>
          </div>
          <span class="text-[11px] font-mono uppercase text-[#ff2600] font-semibold block mb-1">Chief Civil Engineer</span>
          <h4 class="text-[20px] font-semibold text-[#131313] mb-2">Er. Pramod Patel</h4>
          <p class="text-[13px] text-[#555] leading-relaxed">Leads RCC structural analysis, soil load bearing checks, beam-column casting, and seismic safety standards.</p>
        </div>
      </div>

      <!-- Member 3 -->
      <div class="rounded-[10px] bg-white p-4 border border-[#e4e4e4] shadow-xs flex flex-col justify-between">
        <div>
          <div class="relative w-full aspect-[4/4.5] rounded-[6px] overflow-hidden bg-zinc-900 mb-4">
            <img src="file:///E:/Portfolio/Shivom Builders/public/images/about/team-vinod.jpg" class="w-full h-full object-cover filter grayscale" />
            <div class="absolute bottom-3 right-3 px-2 py-0.5 rounded-[4px] bg-black/75 text-white/90 text-[10px] font-mono uppercase">9+ Years</div>
          </div>
          <span class="text-[11px] font-mono uppercase text-[#ff2600] font-semibold block mb-1">Lead Site Supervisor</span>
          <h4 class="text-[20px] font-semibold text-[#131313] mb-2">Vinod</h4>
          <p class="text-[13px] text-[#555] leading-relaxed">Supervises daily on-site work, batch quality checks on cement and steel, and guarantees clean milestone handover.</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

const htmlPath = 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/preview_team_photos.html';
fs.writeFileSync(htmlPath, html);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\live_team_photos_verified.png';
execSync(`"${chromePath}" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=2000 --window-size=1400,600 --screenshot="${dest}" "file:///${htmlPath}"`);
console.log('Saved live_team_photos_verified.png, size:', fs.statSync(dest).size);
