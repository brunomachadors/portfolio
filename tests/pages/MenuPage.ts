import { Page, expect } from '@playwright/test';

export class MenuPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHome() {
    await this.page.goto('', { waitUntil: 'commit' });
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
    await expect(toggle).toBeVisible();
    const firstMobileItem = this.page.getByTestId('mobile-menu-link-home');

    for (let attempt = 0; attempt < 3; attempt++) {
      if (await firstMobileItem.isVisible()) {
        break;
      }

      await toggle.tap();
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
