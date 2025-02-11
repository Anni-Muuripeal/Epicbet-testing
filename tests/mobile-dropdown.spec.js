const { test, expect } = require('@playwright/test');
const { SPORTS } = require('./utils/constants');
const { SportPage } = require('./pages/SportPage');

test.describe('Mobile dropdown menu tests', () => {
    let sportPage;

    test.beforeEach(async ({ page }) => {
        console.log('Setting up test...');
        sportPage = new SportPage(page);
    });

    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status !== 'passed') {
            await page.screenshot({ 
                path: `./screenshots/${testInfo.title.replace(/\s+/g, '-')}-${Date.now()}.png` 
            });
        }
    });

    test('Market types menu should stay fixed while scrolling', async ({ page }) => {
        console.log('Starting mobile dropdown menu test');
        
        await sportPage.navigateToSport(SPORTS.FOOTBALL);
        console.log('✓ Navigated to Football section');

        await sportPage.clickMatch();
        console.log('✓ Clicked match');
    
        await sportPage.openMarketTypes();
        const initialVisibility = await sportPage.isMarketTypesVisible();
        expect(initialVisibility).toBe(true);
        console.log(`Initial menu visibility: ${initialVisibility}`);
        
        // Scroll down slightly
        await page.evaluate(() => {
            window.scrollBy(0, 200);  // Scroll down by 200 pixels
        });
        await page.waitForTimeout(500); // Wait for scroll to settle
        
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight * 2);
        });
        console.log('✓ Scrolled down two viewport heights');
        await page.waitForTimeout(500);
        
        const isVisible = await sportPage.isMenuOpen();
        console.log(`Menu visibility after scroll: ${isVisible}`);
        expect(isVisible).toBe(false);
    });
});