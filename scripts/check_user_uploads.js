const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb\\.user_uploaded';

const inspectFiles = [
  'media_1794984443186_a30c93a2.png',
  'media_1794984452830_36c8e330.png',
  'media_1794984464565_ae57a22e.png',
  'media_1794984475103_c43631dc.png',
  'media_1794984485168_769737b9.png',
  'media_1794984500421_a84cc860.png',
  'media_1794984516651_bdcff766.png',
  'media_1794986160781_9f9962a6.jpg',
  'media_1794987291562_df9fb953.jpg',
  'media_1794987371246_c1cbb929.png',
  'media_1794987551483_796382f9.png',
  'media_1794987810148_0cd473fc.jpg',
  'media_1794988492442_a34921db.jpg'
];

for (const f of inspectFiles) {
  try {
    const s = fs.statSync(path.join(dir, f));
    console.log(f, s.size);
  } catch(e) {}
}
