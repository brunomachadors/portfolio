import { Page, expect } from '@playwright/test';

export class MenuPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHome() {
    await this.page.goto('', { waitUntil: 'networkidle' });
  }

  async validateMenuItemVisible(menuItem: string) {
    const locator = this.page.getByTestId(`menu-link-${menuItem}`);
    await expect(locator).toBeVisible();
  }

  async clickMenuItem(menuItem: string) {
    const locator = this.page.getByTestId(`menu-link-${menuItem}`);
    await locator.click();
  }

  async validateURL(menuItem: string) {
    const expectedURL = menuItem === 'home' ? '/' : `/${menuItem}`;
    await expect(this.page).toHaveURL(expectedURL);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(300);
  }

  async openMobileMenu() {
    const toggle = this.page.getByTestId('menu-toggle');
    const firstMobileItem = this.page.getByTestId('mobile-menu-link-home');

    for (let attempt = 0; attempt < 3; attempt++) {
      if (await firstMobileItem.isVisible()) {
        break;
      }

      await this.page.evaluate(() => window.scrollTo(0, 0));
      await this.page.waitForTimeout(150);
      await toggle.scrollIntoViewIfNeeded();
      await expect(toggle).toBeVisible();
      await toggle.click();
      await this.page.waitForTimeout(400);
    }

    await expect(firstMobileItem).toBeVisible();
  }

  async validateMobileMenuItemVisible(menuItem: string) {
    const locator = this.page.getByTestId(`mobile-menu-link-${menuItem}`);
    await expect(locator).toBeVisible();
  }

  async clickMobileMenuItem(menuItem: string) {
    const locator = this.page.getByTestId(`mobile-menu-link-${menuItem}`);
    await locator.click();
  }
}
