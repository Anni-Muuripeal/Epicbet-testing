const { BasePage } = require('./basePage');

class AccessibilityPage extends BasePage {
    async getAllTextElements() {
        const elements = await this.page.$$eval('body *', (elements) => {
            return elements
                .filter(el => {
                    // Get only visible elements with text content
                    const style = window.getComputedStyle(el);
                    const hasText = el.textContent.trim().length > 0;
                    const isVisible = style.display !== 'none' && 
                                   style.visibility !== 'hidden' && 
                                   style.opacity !== '0' &&
                                   parseFloat(style.fontSize) > 0;
                    return hasText && isVisible;
                })
                .map(el => {
                    const style = window.getComputedStyle(el);
                    // Log element for debugging
                    console.log(`Found element: ${el.tagName}, fontSize: ${style.fontSize}, classes: ${el.className}`);
                    return {
                        text: el.textContent.trim(),
                        fontSize: parseFloat(style.fontSize),
                        element: el.tagName,
                        classList: el.className || ''
                    };
                });
        });
        
        console.log(`Total elements found: ${elements.length}`);
        return elements;
    }
}

module.exports = { AccessibilityPage };