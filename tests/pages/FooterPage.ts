import { Page, Locator, expect } from '@playwright/test';

export class FooterPage {
  readonly page: Page;
  readonly footerContainer: Locator;
  readonly footerLinks: Locator;
  readonly copyrightText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.footerContainer = page.getByTestId('footer-container');
    this.footerLinks = page.getByTestId('footer-links').locator('a');
    this.copyrightText = page.getByTestId('footer-copyright');
  }

  async validateFooterVisible() {
    await expect(this.footerContainer).toBeVisible();
  }

  async validateLinkVisible(linkTestId: string) {
    const link = this.page.getByTestId(`footer-link-${linkTestId}`);
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', expect.stringContaining('http'));
  }

  async validateCopyrightText(expectedText: string) {
    await expect(this.copyrightText).toBeVisible();
    await expect(this.copyrightText).toHaveText(expectedText);
  }
}
