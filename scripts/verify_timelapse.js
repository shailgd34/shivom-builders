const { execSync } = require('child_process');
const fs = require('fs');

const htmlTimelapse = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #131313; color: white; margin: 0; padding: 40px 20px; }
    .font-mono { font-family: 'IBM Plex Mono', monospace; }
  </style>
</head>
<body>
  <div style="max-width: 1335px; margin: 0 auto;">
    <div style="display: grid; grid-template-columns: 5fr 7fr; gap: 40px; align-items: center;">
      
      <!-- Left Narrative: Non-italic, clean text -->
      <div>
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
          <span style="background: #ff2600; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-family: monospace; font-weight: bold;">STAGE 04</span>
          <span style="font-size: 12px; font-family: monospace; color: #a1a1aa; text-transform: uppercase;">MONTH 10 — DREAM HOME</span>
          <span style="color: rgba(255,255,255,0.2);">·</span>
          <span style="font-size: 12px; font-family: monospace; color: #34d399;">Month 9 — 11</span>
        </div>

        <h3 style="font-size: 32px; font-weight: 500; color: white; margin-bottom: 12px; line-height: 1.15;">Finished Luxury Villa & Key Handover</h3>
        <p style="font-size: 16px; color: rgba(255,255,255,0.7); line-height: 24px; margin-bottom: 24px;">Italian marble flooring, teakwood main doors, warm architectural facade lighting, deep snag-list audit, and handing over the keys to your family.</p>

        <!-- Scope Checklist: NOT ITALIC, SIMPLE, CLEAN -->
        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px; display: flex; flex-direction: column; gap: 10px;">
          <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px; font-style: normal; font-weight: normal; color: #e4e4e7;">
            <svg style="width: 18px; height: 18px; color: #ff2600; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span style="font-style: normal; font-weight: normal;">Italian marble flooring & Grohe / Kohler bath fittings</span>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px; font-style: normal; font-weight: normal; color: #e4e4e7;">
            <svg style="width: 18px; height: 18px; color: #ff2600; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span style="font-style: normal; font-weight: normal;">Asian Paints Royale luxury exterior & interior finishes</span>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px; font-style: normal; font-weight: normal; color: #e4e4e7;">
            <svg style="width: 18px; height: 18px; color: #ff2600; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span style="font-style: normal; font-weight: normal;">Final deep cleaning & 120-point quality snag inspection</span>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px; font-style: normal; font-weight: normal; color: #e4e4e7;">
            <svg style="width: 18px; height: 18px; color: #ff2600; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span style="font-style: normal; font-weight: normal;">10-Year certified structural warranty document handed over</span>
          </div>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 12px;">
          <span style="background: white; color: #131313; padding: 8px 16px; border-radius: 6px; font-family: monospace; font-size: 12px; font-weight: bold; text-transform: uppercase;">▶ Play Video Timelapse</span>
          <span style="font-size: 12px; font-family: monospace; color: #a1a1aa;">Auto-steps through all 4 stages</span>
        </div>
      </div>

      <!-- Right Column: Stage 4 Photo (after.png / finished villa) -->
      <div>
        <div style="position: relative; width: 100%; height: 420px; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.15); background: #09090b;">
          <img src="file:///E:/Portfolio/Shivom Builders/public/images/hero/after.png" style="width: 100%; height: 100%; object-fit: cover;" />
          <div style="position: absolute; top: 16px; left: 16px; display: flex; gap: 8px;">
            <span style="background: rgba(0,0,0,0.85); color: white; padding: 4px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; font-weight: bold;">04 / 04</span>
            <span style="background: rgba(255,255,255,0.15); color: white; padding: 4px 12px; border-radius: 4px; font-family: monospace; font-size: 12px;">Month 10 — Dream Home</span>
          </div>
        </div>
      </div>

    </div>

    <!-- 4 Stage Thumbnail Stepper -->
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 32px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;">
      <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 12px;">
        <div style="font-family: monospace; font-size: 11px; color: #a1a1aa; display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span>STAGE 01</span>
          <span>Week 1 — 4</span>
        </div>
        <div style="height: 60px; border-radius: 4px; overflow: hidden; margin-bottom: 8px;">
          <img src="file:///E:/Portfolio/Shivom Builders/public/images/hero/before.png" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <p style="font-size: 13px; font-weight: 500; margin: 0; color: white;">Empty Plot & 3D Vastu Design</p>
      </div>

      <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 12px;">
        <div style="font-family: monospace; font-size: 11px; color: #a1a1aa; display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span>STAGE 02</span>
          <span>Month 2 — 4</span>
        </div>
        <div style="height: 60px; border-radius: 4px; overflow: hidden; margin-bottom: 8px;">
          <img src="file:///E:/Portfolio/Shivom Builders/public/images/hero/Three-Story House Under Construction-2.png" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <p style="font-size: 13px; font-weight: 500; margin: 0; color: white;">Deep Foundation & Columns</p>
      </div>

      <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 12px;">
        <div style="font-family: monospace; font-size: 11px; color: #a1a1aa; display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span>STAGE 03</span>
          <span>Month 5 — 8</span>
        </div>
        <div style="height: 60px; border-radius: 4px; overflow: hidden; margin-bottom: 8px;">
          <img src="file:///E:/Portfolio/Shivom Builders/public/images/hero/Modern House Under Construction-3.png" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <p style="font-size: 13px; font-weight: 500; margin: 0; color: white;">Brickwork, Slabs & Glazing</p>
      </div>

      <div style="background: rgba(255,38,0,0.15); border: 1px solid #ff2600; border-radius: 6px; padding: 12px;">
        <div style="font-family: monospace; font-size: 11px; color: #ff2600; font-weight: bold; display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span>STAGE 04</span>
          <span>Month 9 — 11</span>
        </div>
        <div style="height: 60px; border-radius: 4px; overflow: hidden; margin-bottom: 8px;">
          <img src="file:///E:/Portfolio/Shivom Builders/public/images/hero/after.png" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <p style="font-size: 13px; font-weight: 500; margin: 0; color: white;">Finished Luxury Villa Handover</p>
      </div>
    </div>

  </div>
</body>
</html>
`;

const htmlPath = 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/preview_timelapse_verified.html';
fs.writeFileSync(htmlPath, htmlTimelapse);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dest = 'C:\\Users\\asus s\\.gemini\\antigravity\\brain\\9dfa8dd5-fbd6-428b-ade5-97a4191afceb/live_timelapse_verified.png';
execSync(`"${chromePath}" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=2000 --window-size=1400,750 --screenshot="${dest}" "file:///${htmlPath}"`);
console.log('Saved live_timelapse_verified.png, size:', fs.statSync(dest).size);

