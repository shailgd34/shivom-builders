const fs = require('fs');
const html = fs.readFileSync('C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/dumped_instagram.html', 'utf8');

const title = html.match(/<title>([^<]+)<\/title>/);
console.log('Title:', title ? title[1] : 'none');

const h1 = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
console.log('H1:', h1 ? h1[1] : 'none');

// Find all scontent image urls
const allImages = html.match(/https:\/\/[^"'\\]+scontent[^"'\\]+/g) || [];
console.log('Scontent count:', allImages.length);
allImages.slice(0, 5).forEach((img, i) => console.log(i, img.replace(/&amp;/g, '&').replace(/\\u0026/g, '&')));

// Find user or profile handle
const profileMatch = html.match(/"username":"([^"]+)"/);
console.log('Username:', profileMatch ? profileMatch[1] : 'none');
