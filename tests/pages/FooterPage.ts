import { Page, Locator, expect } from '@playwright/test';

export class FooterPage {
  readonly page: Page;
  readonly footerContainer: Locator;
  readonly footerLinks: Locator;
  readonly copyrightText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.footerContainer = page.locator('[data-test-id="footer-container"]');
    this.footerLinks = page.locator('[data-test-id="footer-links"] a');
    this.copyrightText = page.locator('[data-test-id="footer-copyright"]');
  }

  async validateFooterVisible() {
    await expect(this.footerContainer).toBeVisible();
  }

  async validateLinkVisible(linkTestId: string) {
    const link = this.page.locator(
      `[data-test-id="footer-link-${linkTestId}"]`
    );
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', expect.stringContaining('http'));
  }

  async validateCopyrightText(expectedText: string) {
    await expect(this.copyrightText).toBeVisible();
    await expect(this.copyrightText).toHaveText(expectedText);
  }
}
