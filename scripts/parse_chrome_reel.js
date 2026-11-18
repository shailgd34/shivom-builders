const fs = require('fs');
const html = fs.readFileSync('C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/chrome_reel.html', 'utf8');

console.log('Length:', html.length);
const title = html.match(/<title>([^<]+)<\/title>/);
console.log('Title:', title ? title[1] : 'none');

const videoSrc = html.match(/src="([^"]+\.mp4[^"]*)"/);
if (videoSrc) {
  console.log('Found video src:', videoSrc[1].replace(/&amp;/g, '&'));
}

const cdnMp4 = html.match(/https:\/\/[^"']+\.mp4[^"']*/g);
console.log('Cdn mp4 count:', cdnMp4 ? cdnMp4.length : 0);
if (cdnMp4) console.log('First mp4:', cdnMp4[0]);
