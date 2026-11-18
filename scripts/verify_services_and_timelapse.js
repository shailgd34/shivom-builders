const { execSync } = require('child_process');
const fs = require('fs');

const htmlServices = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f2f2f2; margin: 0; padding: 40px 20px; }
    .font-mono { font-family: 'IBM Plex Mono', monospace; }
  </style>
</head>
<body>
  <div style="max-width: 1336px; margin: 0 auto;">
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
      
      <!-- Card 1: Floor Plan CAD -->
      <div style="background: white; border: 1px solid #e4e4e4; border-radius: 10px; padding: 10px; display: flex; flex-direction: column; justify-content: space-between; min-height: 420px;">
        <div>
          <div style="position: relative; width: 100%; height: 210px; border-radius: 4px; overflow: hidden; background: #0a0f1d;">
            <svg style="position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.25;" xmlns="http://www.w3.org/2000/svg">
              <pattern id="g1" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#38bdf8" stroke-width="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#g1)" />
            </svg>
            <svg viewBox="0 0 320 215" style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 8px;">
              <rect x="14" y="31" width="294" height="172" fill="none" stroke="#38bdf8" stroke-width="3" rx="2" />
              <!-- Rooms -->
              <rect x="18" y="35" width="140" height="90" fill="rgba(255, 38, 0, 0.15)" stroke="#ff2600" stroke-width="1.8" />
              <text x="88" y="75" text-anchor="middle" font-size="8" font-family="monospace" font-weight="bold" fill="#ffffff">LIVING & LOUNGE</text>
              <text x="88" y="87" text-anchor="middle" font-size="6.5" font-family="monospace" fill="#ff8a75">24'0" × 18'6"</text>

              <rect x="164" y="35" width="60" height="60" fill="rgba(15, 23, 42, 0.8)" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3 3" />
              <text x="194" y="65" text-anchor="middle" font-size="7" font-family="monospace" fill="#93c5fd">COURTYARD</text>

              <rect x="230" y="35" width="75" height="60" fill="rgba(15, 23, 42, 0.8)" stroke="#38bdf8" stroke-width="1.2" />
              <text x="267" y="65" text-anchor="middle" font-size="7" font-family="monospace" fill="#93c5fd">KITCHEN</text>

              <rect x="18" y="132" width="120" height="68" fill="rgba(15, 23, 42, 0.8)" stroke="#38bdf8" stroke-width="1.2" />
              <text x="78" y="165" text-anchor="middle" font-size="7.5" font-family="monospace" fill="#93c5fd">MASTER SUITE</text>
              <text x="78" y="177" text-anchor="middle" font-size="6" font-family="monospace" fill="#64748b">18'0" × 15'0"</text>

              <rect x="144" y="151" width="60" height="49" fill="rgba(15, 23, 42, 0.8)" stroke="#38bdf8" stroke-width="1.2" />
              <text x="174" y="176" text-anchor="middle" font-size="6.5" font-family="monospace" fill="#93c5fd">BATH</text>

              <rect x="210" y="151" width="95" height="49" fill="rgba(15, 23, 42, 0.8)" stroke="#38bdf8" stroke-width="1.2" />
              <text x="257" y="176" text-anchor="middle" font-size="6.5" font-family="monospace" fill="#93c5fd">GARDEN DECK</text>

              <!-- Laser sweep line -->
              <line x1="88" y1="20" x2="88" y2="208" stroke="#ff2600" stroke-width="2" />
              <circle cx="88" cy="114" r="3" fill="#ffffff" stroke="#ff2600" stroke-width="1.5" />
            </svg>
            <div style="position: absolute; top: 10px; left: 10px; z-index: 20; display: flex; gap: 6px;">
              <span style="background: rgba(0,0,0,0.85); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-family: monospace;">● CAD DRAFTING</span>
              <span style="background: rgba(255,38,0,0.9); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-family: monospace;">2,450 SQ FT</span>
            </div>
            <div style="position: absolute; bottom: 8px; left: 10px; right: 10px; z-index: 20; display: flex; justify-content: space-between; background: rgba(0,0,0,0.8); padding: 4px 10px; border-radius: 4px; font-size: 10px; font-family: monospace; color: #38bdf8;">
              <span>Living & Lounge</span>
              <span style="color: #94a3b8;">Vastu Verified</span>
            </div>
          </div>
          <div style="padding: 16px 12px 12px;">
            <div style="display: flex; justify-content: space-between; font-family: monospace; font-size: 12px; border-bottom: 1px solid #e4e4e4; padding-bottom: 8px; color: #6e6e6e;">
              <span style="color: #ff2600; font-weight: bold;">01</span>
              <span>Plan</span>
            </div>
            <h4 style="font-size: 20px; font-weight: 600; margin: 10px 0 6px; color: #131313;">Floor Plan</h4>
            <p style="font-size: 14px; color: #4a4a4a; line-height: 21px; margin: 0;">Planning a floor is the first step in building the floor. And we like to be good at each step!</p>
          </div>
        </div>
        <div style="padding: 10px 12px 4px; border-top: 1px solid #e4e4e4; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; font-family: monospace; text-transform: uppercase; font-weight: 500;">EXPLORE</span>
          <div style="width: 28px; height: 28px; border-radius: 50%; background: #131313; display: flex; align-items: center; justify-content: center; color: white;">→</div>
        </div>
      </div>

      <!-- Card 2: Elevation Video -->
      <div style="background: white; border: 1px solid #e4e4e4; border-radius: 10px; padding: 10px; display: flex; flex-direction: column; justify-content: space-between; min-height: 420px;">
        <div>
          <div style="position: relative; width: 100%; height: 210px; border-radius: 4px; overflow: hidden; background: #131313;">
            <img src="file:///E:/Portfolio/Shivom Builders/public/images/projects/stage-02-design.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; top: 10px; left: 10px; z-index: 10;">
              <span style="background: rgba(0,0,0,0.8); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-family: monospace;">▶ 3D ELEVATION</span>
            </div>
          </div>
          <div style="padding: 16px 12px 12px;">
            <div style="display: flex; justify-content: space-between; font-family: monospace; font-size: 12px; border-bottom: 1px solid #e4e4e4; padding-bottom: 8px; color: #6e6e6e;">
              <span style="color: #ff2600; font-weight: bold;">02</span>
              <span>Elevation</span>
            </div>
            <h4 style="font-size: 20px; font-weight: 600; margin: 10px 0 6px; color: #131313;">Elevation</h4>
            <p style="font-size: 14px; color: #4a4a4a; line-height: 21px; margin: 0;">When people say first impression matters, I think about elevations.</p>
          </div>
        </div>
        <div style="padding: 10px 12px 4px; border-top: 1px solid #e4e4e4; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; font-family: monospace; text-transform: uppercase; font-weight: 500;">EXPLORE</span>
          <div style="width: 28px; height: 28px; border-radius: 50%; background: #131313; display: flex; align-items: center; justify-content: center; color: white;">→</div>
        </div>
      </div>

      <!-- Card 3: Construction Video -->
      <div style="background: white; border: 1px solid #e4e4e4; border-radius: 10px; padding: 10px; display: flex; flex-direction: column; justify-content: space-between; min-height: 420px;">
        <div>
          <div style="position: relative; width: 100%; height: 210px; border-radius: 4px; overflow: hidden; background: #131313;">
            <img src="file:///E:/Portfolio/Shivom Builders/public/images/projects/stage-03-structure.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; top: 10px; left: 10px; z-index: 10;">
              <span style="background: rgba(0,0,0,0.8); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-family: monospace; display: flex; align-items: center; gap: 4px;">
                <span style="width: 6px; height: 6px; border-radius: 50%; background: #ff2600;"></span> SITE REEL
              </span>
            </div>
          </div>
          <div style="padding: 16px 12px 12px;">
            <div style="display: flex; justify-content: space-between; font-family: monospace; font-size: 12px; border-bottom: 1px solid #e4e4e4; padding-bottom: 8px; color: #6e6e6e;">
              <span style="color: #ff2600; font-weight: bold;">03</span>
              <span>Construction</span>
            </div>
            <h4 style="font-size: 20px; font-weight: 600; margin: 10px 0 6px; color: #131313;">Construction</h4>
            <p style="font-size: 14px; color: #4a4a4a; line-height: 21px; margin: 0;">How would you construct if you won't dream? So, you continue to dream, and we will continue to construct.</p>
          </div>
        </div>
        <div style="padding: 10px 12px 4px; border-top: 1px solid #e4e4e4; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; font-family: monospace; text-transform: uppercase; font-weight: 500;">EXPLORE</span>
          <div style="width: 28px; height: 28px; border-radius: 50%; background: #131313; display: flex; align-items: center; justify-content: center; color: white;">→</div>
        </div>
      </div>

      <!-- Card 4: Architectural Design Video -->
      <div style="background: white; border: 1px solid #e4e4e4; border-radius: 10px; padding: 10px; display: flex; flex-direction: column; justify-content: space-between; min-height: 420px;">
        <div>
          <div style="position: relative; width: 100%; height: 210px; border-radius: 4px; overflow: hidden; background: #131313;">
            <img src="file:///E:/Portfolio/Shivom Builders/public/images/projects/stage-04-lavish.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; top: 10px; left: 10px; z-index: 10;">
              <span style="background: rgba(0,0,0,0.8); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-family: monospace;">AERIAL VILLA</span>
            </div>
          </div>
          <div style="padding: 16px 12px 12px;">
            <div style="display: flex; justify-content: space-between; font-family: monospace; font-size: 12px; border-bottom: 1px solid #e4e4e4; padding-bottom: 8px; color: #6e6e6e;">
              <span style="color: #ff2600; font-weight: bold;">04</span>
              <span>Design</span>
            </div>
            <h4 style="font-size: 20px; font-weight: 600; margin: 10px 0 6px; color: #131313;">Architectural Design</h4>
            <p style="font-size: 14px; color: #4a4a4a; line-height: 21px; margin: 0;">We specialize in innovative design concepts that blend functionality with aesthetic appeal.</p>
          </div>
        </div>
        <div style="padding: 10px 12px 4px; border-top: 1px solid #e4e4e4; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; font-family: monospace; text-transform: uppercase; font-weight: 500;">EXPLORE</span>
          <div style="width: 28px; height: 28px; border-radius: 50%; background: #131313; display: flex; align-items: center; justify-content: center; color: white;">→</div>
        </div>
      </div>

    </div>
  </div>
</body>
</html>
`;

const htmlPath = 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/preview_compact_services.html';
fs.writeFileSync(htmlPath, htmlServices);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb/live_compact_services_verified.png';
execSync(`"${chromePath}" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=2000 --window-size=1400,600 --screenshot="${dest}" "file:///${htmlPath}"`);
console.log('Saved live_compact_services_verified.png, size:', fs.statSync(dest).size);

