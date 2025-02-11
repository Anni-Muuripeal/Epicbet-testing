class BasePage {
  constructor(page) {
      this.page = page;
  }

  async goto(path = '') {
      await this.page.goto(`https://epicbet.com/et/sport/${path}`);
      await this.handleCookieConsent();
  }

  async handleCookieConsent() {
      try {
          await this.page.getByRole('button', { name: 'Luba kõik' }).click();
          await this.page.waitForTimeout(1000); // Wait for any animations
          console.log('✓ Clicked cookie consent button');
      } catch (e) {
          console.log('Failed to click cookie consent button:', e.message);
      }
  }
}

module.exports = { BasePage };