const fs = require('fs');
const path = require('path');
const dir = 'E:\\Portfolio\\Shivom Builders\\public\\images\\partners';

for (const f of fs.readdirSync(dir)) {
  const p = path.join(dir, f);
  const buf = fs.readFileSync(p);
  if (f.endsWith('.png')) {
    try {
      console.log(f, buf.readUInt32BE(16), 'x', buf.readUInt32BE(20));
    } catch(e) {
      console.log(f, 'err');
    }
  } else if (f.endsWith('.svg')) {
    const text = buf.toString('utf8');
    const m = text.match(/viewBox="([^"]+)"/);
    console.log(f, 'svg viewBox:', m ? m[1] : 'none');
  } else {
    console.log(f, 'size:', buf.length);
  }
}
