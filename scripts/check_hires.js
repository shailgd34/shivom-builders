const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imgs = [
  'about/welcome-duplex-clean.jpg',
  'projects/project-02.jpg',
  'projects/project-07.jpg',
  'projects/project-13.jpg',
  'projects/project-14.jpg',
  'projects/project-15.jpg',
  'projects/project-16.jpg',
  'hero/hero-reveal-base.jpg'
];

let itemsHtml = '';
imgs.forEach(i => {
  const abs = path.resolve('E:/Portfolio/Shivom Builders/public/images', i).replace(/\\/g, '/');
  itemsHtml += `
    <div style="width:160px;margin:8px;display:inline-block;vertical-align:top;">
      <img src="file:///${abs}" style="width:100%;height:220px;object-fit:cover;border-radius:6px;border:1px solid #333;" />
      <div style="font-size:11px;color:#ccc;text-align:center;margin-top:4px;">${path.basename(i)}</div>
    </div>
  `;
});

const html = `<!DOCTYPE html><html><body style="background:#111;color:#fff;font-family:sans-serif;padding:20px;">${itemsHtml}</body></html>`;
const htmlPath = 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/hires_check.html';
fs.writeFileSync(htmlPath, html);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\hires_check.png';
execSync(`"${chromePath}" --headless=new --disable-gpu --allow-file-access-from-files --window-size=1400,600 --screenshot="${dest}" "file:///${htmlPath}"`);
console.log('Saved hires_check.png successfully');
