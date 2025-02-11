const { test, expect } = require('@playwright/test');
const { AccessibilityPage } = require('./pages/AccessibilityPage');
const { MIN_FONT_SIZE_PX, FAIL_THRESHOLD } = require('./utils/constants');
const { saveLog } = require('./utils/logger');
const { generateAccessibilityReport } = require('./utils/accessibilityHelper');

test.describe('Accessibility - Font Size Tests', () => {
    let accessibilityPage;

    test.beforeEach(async ({ page }) => {
        accessibilityPage = new AccessibilityPage(page);
        await accessibilityPage.goto();
    });

    test('Check for minimum font size compliance', async ({ page }) => {
        const elements = await accessibilityPage.getAllTextElements();
        console.log(`Total elements retrieved: ${elements.length}`);
        
        const smallElements = elements.filter(el => el.fontSize < MIN_FONT_SIZE_PX);
        console.log(`Elements below ${MIN_FONT_SIZE_PX}px: ${smallElements.length}`);
        
        // Log some examples of small elements
        if (smallElements.length > 0) {
            console.log('Sample of small elements:');
            smallElements.slice(0, 3).forEach(el => {
                console.log(`- ${el.element}: ${el.fontSize}px, classes: "${el.classList}", text: "${el.text.substring(0, 50)}"`);
            });
        }
        
        const compliantElements = elements.filter(el => el.fontSize >= MIN_FONT_SIZE_PX);
        
        const report = generateAccessibilityReport(
            elements,
            compliantElements,
            smallElements,
            MIN_FONT_SIZE_PX,
            page.url()
        );

        console.log('Report generated, content length:', report.length);
        console.log('First 500 characters of report:', report.substring(0, 500));
        
        const logPath = await saveLog(report);
        console.log(`Report saved to: ${logPath}`);

        expect(
            smallElements.length,
            `Found ${smallElements.length} elements with font size below ${Math.round(MIN_FONT_SIZE_PX)}px)`
        ).toBeLessThanOrEqual(FAIL_THRESHOLD);
    });
});