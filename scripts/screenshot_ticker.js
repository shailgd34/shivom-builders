const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  const ticker = await page.$('[data-framer-name="Trusted By Section"]');
  if (ticker) {
    await ticker.screenshot({ path: 'C:/Users/asus s/.gemini/antigravity/brain/9dfa8dd5-fbd6-428b-ade5-97a4191afceb/current_ticker_check.png' });
    console.log('Ticker screenshot saved.');
  } else {
    console.log('Ticker element not found!');
  }
  await browser.close();
})();
