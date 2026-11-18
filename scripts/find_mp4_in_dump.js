const fs = require('fs');
const html = fs.readFileSync('C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/dumped_instagram.html', 'utf8');

const matches = html.match(/"video_url":"([^"]+)"/g) || [];
console.log('video_url count:', matches.length);
matches.forEach(m => console.log(m.replace(/\\u0026/g, '&').substring(0, 150)));

const progressive = html.match(/"progressive_download_url":"([^"]+)"/g) || [];
console.log('progressive count:', progressive.length);
progressive.forEach(p => console.log(p.replace(/\\u0026/g, '&').substring(0, 150)));

const baseUrl = html.match(/"baseUrl":"([^"]+\.mp4[^"]*)"/g) || [];
console.log('baseUrl count:', baseUrl.length);
baseUrl.forEach(b => console.log(b.replace(/\\u0026/g, '&').substring(0, 150)));

const anyMp4 = html.match(/https:\\\/\\\/[^"']+\.mp4[^"']*/g) || [];
console.log('any escaped mp4:', anyMp4.length);
anyMp4.slice(0, 3).forEach(a => console.log(a.replace(/\\\//g, '/').replace(/\\u0026/g, '&').substring(0, 160)));
