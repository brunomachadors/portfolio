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
    const expectedHref =
      linkTestId === 'email' ? expect.stringContaining('mailto:') : expect.stringContaining('http');
    await expect(link).toHaveAttribute('href', expectedHref);
  }

  async validateCurrentYearCopyright() {
    const currentYear = new Date().getFullYear();
    await expect(this.copyrightText).toBeVisible();
    await expect(this.copyrightText).toHaveText(`© ${currentYear} Bruno Machado.`);
  }
}
