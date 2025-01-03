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
  }

  async openMobileMenu() {
    const toggle = await this.page.getByTestId('menu-toggle');
    await this.page.waitForTimeout(300);
    await toggle.click();
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
