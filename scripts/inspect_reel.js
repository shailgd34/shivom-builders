const fs = require('fs');
const html = fs.readFileSync('C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/instagram_reel_page.html', 'utf8');

console.log('File size:', html.length);

const cdnMatches = html.match(/https:\/\/[^"'\\]+cdninstagram\.com[^"'\\]+/g) || [];
console.log('CDN matches count:', cdnMatches.length);
cdnMatches.slice(0, 5).forEach((c, i) => console.log(i, c.substring(0, 160)));

const videoMatches = html.match(/"video_versions":\[\{"url":"([^"]+)"/);
if (videoMatches) {
  console.log('Found video_versions URL:', videoMatches[1].replace(/\\u0026/g, '&'));
}

const displayUrl = html.match(/"display_url":"([^"]+)"/);
if (displayUrl) {
  console.log('Found display_url:', displayUrl[1].replace(/\\u0026/g, '&'));
}

// Search for any .mp4
const anyMp4 = html.match(/https:[^"'\\]+\.mp4[^"'\\]*/g);
console.log('Any mp4:', anyMp4 ? anyMp4.length : 0);
if (anyMp4) console.log(anyMp4[0].replace(/\\u0026/g, '&'));
