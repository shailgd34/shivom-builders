const { execSync } = require('child_process');
const fs = require('fs');

const services = [
  { id: "01", category: "Plan", title: "Floor Plan", desc: "Planning a floor is the first step in building the floor. And we like to be good at each step!", img: "file:///E:/Portfolio/Shivom Builders/public/images/projects/stage-01-map.jpg" },
  { id: "02", category: "Elevation", title: "Elevation", desc: "When people say first impression matters, I think about elevations.", img: "file:///E:/Portfolio/Shivom Builders/public/images/projects/stage-02-design.jpg" },
  { id: "03", category: "Construction", title: "Construction", desc: "How would you construct if you won't dream? So, you continue to dream, and we will continue to construct.", img: "file:///E:/Portfolio/Shivom Builders/public/images/projects/stage-03-structure.jpg" },
  { id: "04", category: "Design", title: "Architectural Design", desc: "We specialize in innovative design concepts that blend functionality with aesthetic appeal.", img: "file:///E:/Portfolio/Shivom Builders/public/images/projects/stage-04-lavish.jpg" }
];

let cardsHtml = '';
services.forEach(s => {
  cardsHtml += `
    <div class="p-2 pb-3 rounded-[10px] bg-white border border-[#e4e4e4] shadow-sm flex flex-col justify-between">
      <div>
        <div class="h-[200px] rounded-[6px] overflow-hidden mb-3 bg-zinc-100">
          <img src="${s.img}" class="w-full h-full object-cover" />
        </div>
        <div class="px-2">
          <div class="flex justify-between items-center text-[11px] font-mono mb-2">
            <span class="text-[#ff2600]">${s.id}</span>
            <span class="text-[#6e6e6e]">${s.category}</span>
          </div>
          <h3 class="text-[18px] font-medium text-[#131313] mb-2">${s.title}</h3>
          <p class="text-[13px] text-[#6e6e6e] leading-relaxed line-clamp-3 mb-4">${s.desc}</p>
        </div>
      </div>
      <div class="pt-3 px-2 border-t border-[#e4e4e4] flex items-center justify-between">
        <span class="text-[12px] font-mono uppercase text-[#131313] font-medium">Explore</span>
        <div class="w-7 h-7 rounded-full bg-[#131313] flex items-center justify-center text-white">
          →
        </div>
      </div>
    </div>
  `;
});

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f2f2f2; }
  </style>
</head>
<body class="p-8">
  <div class="max-w-[1336px] mx-auto">
    <div class="grid grid-cols-4 gap-6">
      ${cardsHtml}
    </div>
  </div>
</body>
</html>
`;

const htmlPath = 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/preview_services_arrow.html';
fs.writeFileSync(htmlPath, html);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\preview_services_black_arrow.png';
execSync(`"${chromePath}" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=2000 --window-size=1400,600 --screenshot="${dest}" "file:///${htmlPath}"`);
console.log('Saved preview_services_black_arrow.png, size:', fs.statSync(dest).size);
