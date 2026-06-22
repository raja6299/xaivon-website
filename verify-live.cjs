const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Navigate to live server
  console.log("Navigating to https://xaivon.com...");
  await page.goto('https://xaivon.com', { waitUntil: 'networkidle0', timeout: 30000 });

  const widths = [1024, 1280, 1366, 1440, 1536, 1920];
  const outDir = 'C:\\Users\\rajab\\.gemini\\antigravity\\brain\\2c18a944-bd35-4728-9211-0ba31b61ce1f\\scratch';

  for (const w of widths) {
    await page.setViewport({ width: w, height: 900 });
    // Wait for repaint
    await new Promise(r => setTimeout(r, 500));

    // Execute exact queries requested by user
    const data = await page.evaluate(() => {
      const l1 = document.querySelector('.hero-headline-l1');
      if (!l1) return { error: "Element not found. Maybe deployment is not live yet?" };
      
      const textWidth = l1.getBoundingClientRect().width;
      const containerWidth = l1.parentElement.getBoundingClientRect().width;
      
      return { textWidth, containerWidth };
    });

    console.log(`\n=== WIDTH: ${w}px ===`);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(`document.querySelector('.hero-headline-l1').getBoundingClientRect().width: ${data.textWidth}`);
      console.log(`document.querySelector('.hero-headline-l1').parentElement.getBoundingClientRect().width: ${data.containerWidth}`);
      if (data.textWidth >= data.containerWidth) {
        console.log(`❌ OVERFLOW DETECTED! ${data.textWidth} >= ${data.containerWidth}`);
      } else {
        console.log(`✅ Passed. Line width is strictly less than container.`);
      }
    }

    const path = `${outDir}\\live_hero_${w}px.png`;
    await page.screenshot({ path, fullPage: true });
    console.log(`📸 Viewport screenshot saved to ${path}`);
  }

  await browser.close();
})();
