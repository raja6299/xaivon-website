const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to local server
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 });
  } catch (e) {
    console.error("Failed to load page. Make sure dev server is running.", e);
    process.exit(1);
  }

  const widths = [320, 360, 375, 414, 480, 600, 768, 1024, 1280, 1366, 1440, 1536, 1920];
  const screenshotWidths = [375, 768, 1366, 1920];
  const outDir = 'C:\\Users\\rajab\\.gemini\\antigravity\\brain\\2c18a944-bd35-4728-9211-0ba31b61ce1f\\scratch';

  let hasOverflow = false;

  for (const w of widths) {
    await page.setViewport({ width: w, height: 900 });
    // Wait a brief moment for fluid typography and layouts to adjust
    await new Promise(r => setTimeout(r, 100));

    // Evaluate metrics
    const metrics = await page.evaluate(() => {
      const l1 = document.querySelector('.hero-headline-l1');
      const l2 = document.querySelector('.hero-headline-l2');
      const container = document.querySelector('.hero-content');
      
      if (!l1 || !l2) return { error: "Headline elements not found" };

      const l1Rect = l1.getBoundingClientRect();
      const l2Rect = l2.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();

      // Check for horizontal overflow (element width vs available width, or scrollWidth > clientWidth)
      const l1Overflow = l1.scrollWidth > l1.clientWidth || l1Rect.width > contRect.width;
      const l2Overflow = l2.scrollWidth > l2.clientWidth || l2Rect.width > contRect.width;

      return {
        width: window.innerWidth,
        l1Width: l1Rect.width,
        l2Width: l2Rect.width,
        containerWidth: contRect.width,
        l1Overflow,
        l2Overflow,
        // Check if elements are displayed as block and stacked
        l1Top: l1Rect.top,
        l2Top: l2Rect.top
      };
    });

    console.log(`[${w}px] Metrics:`, metrics);

    if (metrics.l1Overflow || metrics.l2Overflow) {
      console.error(`❌ OVERFLOW DETECTED at ${w}px!`);
      hasOverflow = true;
    } else {
      console.log(`✅ No overflow at ${w}px`);
    }

    if (w >= 768) {
      // Expect 2 lines: l1 and l2 stacked
      if (metrics.l2Top <= metrics.l1Top + 10) {
        console.error(`❌ Headline not stacked into 2 lines at ${w}px!`);
        hasOverflow = true;
      }
    } else {
      // Expect 3 lines: l1a, l1b, l2 stacked
      const mobileMetrics = await page.evaluate(() => {
        const l1a = document.querySelector('.hero-headline-l1a');
        const l1b = document.querySelector('.hero-headline-l1b');
        const l2 = document.querySelector('.hero-headline-l2');
        if (!l1a || !l1b || !l2) return null;
        return {
          l1aTop: l1a.getBoundingClientRect().top,
          l1bTop: l1b.getBoundingClientRect().top,
          l2Top: l2.getBoundingClientRect().top
        };
      });
      if (mobileMetrics) {
        if (mobileMetrics.l1bTop <= mobileMetrics.l1aTop + 5 || mobileMetrics.l2Top <= mobileMetrics.l1bTop + 5) {
          console.error(`❌ Headline not stacked into 3 lines at ${w}px!`);
          hasOverflow = true;
        }
      }
    }

    // Take screenshot if requested
    if (screenshotWidths.includes(w)) {
      const path = `${outDir}\\hero_${w}px.png`;
      await page.screenshot({ path, fullPage: true });
      console.log(`📸 Screenshot saved to ${path}`);
    }
  }

  await browser.close();
  
  if (hasOverflow) {
    process.exit(1);
  } else {
    console.log("All tests passed! No overflows detected.");
    process.exit(0);
  }
})();
