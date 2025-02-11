const { test, expect } = require('@playwright/test');
const { SearchPage } = require('./pages/SearchPage');

test.describe('Bug 11 - Search Result Prioritization', () => {
    let searchPage;

    test.beforeEach(async ({ page }) => {
        searchPage = new SearchPage(page);
        await searchPage.goto(); 
    });

    test('Team search should prioritize exact matches over current matches', async ({ page }) => {
        const searchTerm = 'Manchester United';
        
        await searchPage.performSearch(searchTerm);
        
        const results = await searchPage.getSearchResults();
        
        expect(results.length, 'Search should return results').toBeGreaterThan(0);
        
        const exactMatchIndex = results.findIndex(result => 
            result.text.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        const otherMatchIndex = results.findIndex(result => 
            (result.text.toLowerCase().includes('manchester') || 
             result.text.toLowerCase().includes('united')) &&
            !result.text.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        expect(exactMatchIndex, 
            `${searchTerm} should appear in search results`).toBeGreaterThanOrEqual(0);
            
        if (exactMatchIndex >= 0 && otherMatchIndex >= 0) {
            expect(exactMatchIndex, 
                `${searchTerm} should appear before other Manchester matches`)
                .toBeLessThan(otherMatchIndex);
        }
        
        expect(exactMatchIndex, 
            `${searchTerm} should appear in top 3 results`).toBeLessThan(3);
    });
});