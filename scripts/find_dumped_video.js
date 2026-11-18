const fs = require('fs');
const html = fs.readFileSync('C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/dumped_instagram.html', 'utf8');

console.log('Dumped html size:', html.length);
const mp4Matches = html.match(/https:\/\/[^"'\\]+\.mp4[^"'\\]*/g) || [];
console.log('MP4 matches in dumped HTML:', mp4Matches.length);
if (mp4Matches.length > 0) {
  mp4Matches.forEach((m, i) => console.log(i, m.replace(/\\u0026/g, '&').substring(0, 150)));
}

// Search for poster or og:image or video tags
const videoTags = html.match(/<video[^>]+>/g) || [];
console.log('Video tags in dumped HTML:', videoTags.length);
videoTags.forEach(v => console.log('Tag:', v.substring(0, 200)));

const images = html.match(/https:\/\/[^"'\\]+cdninstagram\.com\/v\/[^"'\\]+/g) || [];
console.log('Instagram CDN images:', images.length);
if (images.length > 0) {
  console.log('First image:', images[0].replace(/\\u0026/g, '&').substring(0, 160));
}
