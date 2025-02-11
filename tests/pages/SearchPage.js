const { BasePage } = require('./basePage');

class SearchPage extends BasePage {
    constructor(page) {
        super(page);
        this.selectors = {
            searchButton: '[data-testid="search-button"]',
            searchInput: '[data-testid="search-input"]',
            searchResults: '[data-testid="search-container"]',
            searchContainer: '[data-testid="search-container"]',
            noResultsMessage: '[data-testid="no-results-message"]'
        };
    }

    async performSearch(searchTerm) {
        await this.page.getByTestId('search-button').click();
        await this.page.getByTestId('search-input').fill(searchTerm);
        await this.page.keyboard.press('Enter');
        // Wait for results to load
        await this.page.getByTestId('search-container').waitFor({ state: 'visible' });
    }

    async getSearchResults() {
        try {
            const searchContainer = this.page.getByTestId('search-container');
            await searchContainer.waitFor({ timeout: 5000 });
            const buttons = await searchContainer.getByRole('button').all();
            
            return await Promise.all(buttons.map(async (button, index) => ({
                text: await button.textContent(),
                position: index + 1
            })));
        } catch (e) {
            // If no results found, return empty array
            return [];
        }
    }

    async hasNoResults() {
        try {
            await this.page.waitForSelector(this.selectors.noResultsMessage, { timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }

    async getFirstNResults(n) {
        const results = await this.getSearchResults();
        return results.slice(0, n);
    }
}

module.exports = { SearchPage };