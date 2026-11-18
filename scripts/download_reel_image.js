const https = require('https');
const fs = require('fs');
const path = require('path');

const imgUrl = 'https://scontent.cdninstagram.com/v/t51.82787-15/780728106_17963058318178784_4067845215474250046_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=lO8s1oDYLnEQ7kNvwEX4YQ6&_nc_oc=AdrjsqD3IpSwiYtdde0mpcBHxPTyCTDXYeP837vO4xvQIJ8R0MV4ujPPRzxsAMT2-II77DZ4RI4uSuFASxJjNeRX&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=cQS1xHoMP3rV1PFAH1EEtg&_nc_ss=7f689&_nc_ct=RQosPBUKFQQAAAA&oh=00_AQQUxwb1EsDbpf_JkWEIJulILBweCZjYTi3g-dr9HfRQiQ&oe=6B03AA99';

const dest = path.join(__dirname, '../public/images/about/shivom-reel-hero.jpg');

function download(u, target) {
  https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    if (res.headers.location) {
      return download(res.headers.location, target);
    }
    const file = fs.createWriteStream(target);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Saved image, size:', fs.statSync(target).size);
    });
  }).on('error', err => {
    console.error('Error:', err.message);
  });
}

download(imgUrl, dest);
