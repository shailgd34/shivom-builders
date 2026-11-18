const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Let's test downloading from alternative reliable sources like WorldVectorLogo or SeekLogo or direct brand assets
const brands = [
  {
    name: 'ultratech',
    urls: [
      'https://seeklogo.com/images/U/ultratech-cement-logo-4B3848148E-seeklogo.com.png',
      'https://cdn.iconscout.com/icon/free/png-256/free-ultratech-cement-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-pack-logos-icons-283100.png',
      'https://raw.githubusercontent.com/sahilrajput03/logos/main/logos/ultratech.png'
    ]
  },
  {
    name: 'ambuja',
    urls: [
      'https://seeklogo.com/images/A/ambuja-cement-logo-8A1C6A0356-seeklogo.com.png',
      'https://cdn.iconscout.com/icon/free/png-256/free-ambuja-cements-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-pack-logos-icons-283101.png'
    ]
  },
  {
    name: 'kajaria',
    urls: [
      'https://seeklogo.com/images/K/kajaria-ceramics-logo-E8F5E97D7F-seeklogo.com.png'
    ]
  },
  {
    name: 'jaquar',
    urls: [
      'https://seeklogo.com/images/J/jaquar-logo-E320A793B2-seeklogo.com.png'
    ]
  },
  {
    name: 'havells',
    urls: [
      'https://seeklogo.com/images/H/havells-logo-C727DCE911-seeklogo.com.png'
    ]
  },
  {
    name: 'kohler',
    urls: [
      'https://seeklogo.com/images/K/kohler-logo-3EE1BFB8F1-seeklogo.com.png'
    ]
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      const f = fs.createWriteStream(dest);
      res.pipe(f);
      f.on('finish', () => f.close(() => resolve(true)));
    });
    req.on('error', reject);
    req.setTimeout(6000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function run() {
  const dir = 'E:/Portfolio/Shivom Builders/public/images/partners';
  for (const b of brands) {
    let success = false;
    for (const u of b.urls) {
      try {
        console.log(`Trying ${b.name} from ${u}...`);
        await download(u, path.join(dir, `${b.name}.png`));
        console.log(`SUCCESS: ${b.name}`);
        success = true;
        break;
      } catch (e) {
        console.log(`Failed ${u}: ${e.message}`);
      }
    }
  }
}
run();
