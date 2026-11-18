const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // find button with text 4-Stage Timelapse
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => b.textContent && b.textContent.includes('4-Stage Timelapse'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 600));

  // click step 4 button (idx 3)
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const step4 = btns.find(b => b.textContent && b.textContent.includes('STAGE 04'));
    if (step4) step4.click();
  });
  await new Promise(r => setTimeout(r, 600));

  const info = await page.evaluate(() => {
    const span = Array.from(document.querySelectorAll('span')).find(s => s.textContent && s.textContent.includes('Italian marble'));
    if (!span) return { error: 'span not found' };
    const comp = window.getComputedStyle(span);
    return {
      text: span.textContent,
      fontStyle: comp.fontStyle,
      fontFamily: comp.fontFamily,
      fontWeight: comp.fontWeight,
      fontSize: comp.fontSize,
      className: span.className,
      parentClass: span.parentElement ? span.parentElement.className : ''
    };
  });

  console.log('Inspection Result:', JSON.stringify(info, null, 2));
  await browser.close();
})();

