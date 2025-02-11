const { BasePage } = require('./basePage');

class SportPage extends BasePage {
    constructor(page) {
        super(page);
        // Merge base selectors with sport-specific ones
        this.selectors = {
            ...super.selectors,  // This includes the cookie selectors from BasePage
            sportButton: (sportId) => `[data-testid="category-button"][data-testkey="${sportId}"]`,
            matchButton: 'button:has-text("täna")',
            marketTypesDropdown: 'button:has-text("Turgude Liigid")',
            marketTypesMenu: '[data-testid="market-types-menu"]',
            varavadOption: 'div[data-testkey="Väravad"]',
            dropdownArrow: 'button:has-text("Turgude Liigid") svg'
        };
    }

    async navigateToSport(sportId) {
        await this.goto();
        // Cookie handling is now done in goto() from BasePage
        await this.page.click(this.selectors.sportButton(sportId));
        await this.page.waitForSelector(this.selectors.matchButton);
    }

    async clickMatch() {
        await this.page.waitForSelector(this.selectors.matchButton);
        // Get all matches happening today and click the first one
        const todayMatches = await this.page.locator(this.selectors.matchButton).all();
        if (todayMatches.length === 0) {
            throw new Error('No matches found for today');
        }
        await todayMatches[0].click();
        await this.page.waitForSelector(this.selectors.marketTypesDropdown);
    }

    async openMarketTypes() {
        // Wait for the page to settle after previous actions
        await this.page.waitForTimeout(1000);

        // Wait for and click the dropdown arrow
        await this.page.waitForSelector(this.selectors.dropdownArrow, { state: 'visible', timeout: 10000 });
        await this.page.waitForTimeout(500); // Small wait before click
        await this.page.click(this.selectors.dropdownArrow);
        
        // Wait for menu to fully open
        await this.page.waitForTimeout(1000);
        
        // Wait for and click Väravad option
        await this.page.waitForSelector(this.selectors.varavadOption, { state: 'visible', timeout: 10000 });
        await this.page.waitForTimeout(500); // Small wait before click
        await this.page.click(this.selectors.varavadOption);
    }

    async waitForCookieBannerToDisappear() {
        try {
            await this.page.waitForSelector(this.selectors.cookieBanner, { 
                state: 'hidden',
                timeout: 5000 
            });
        } catch (e) {
            console.log('Cookie banner still visible or timeout occurred');
            throw e;
        }
    }

    async isMenuOpen() {
        const menu = await this.page.$(this.selectors.marketTypesMenu);
        return menu?.isVisible() || false;
    }

    async isMarketTypesVisible() {
        const menu = await this.page.$(this.selectors.marketTypesDropdown);
        return menu?.isVisible() || false;
    }
}

module.exports = { SportPage };