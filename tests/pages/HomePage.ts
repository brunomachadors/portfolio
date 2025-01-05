import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly titleLocator: Locator;
  readonly subtitleLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleLocator = page.locator('[data-test-id="home-title"]');
    this.subtitleLocator = page.locator('[data-test-id="home-description"]');
  }

  async navigateToHome() {
    await this.page.goto('/', { waitUntil: 'commit' });
  }

  async validateTitleVisible() {
    await expect(this.titleLocator).toBeVisible();
    await expect(this.titleLocator).toHaveText('Welcome to my Portfolio');
  }

  async validateSubtitleVisible() {
    await expect(this.subtitleLocator).toBeVisible();
    await expect(this.subtitleLocator).toHaveText(
      'Explore my skills, experience, and projects as a QA Engineer.'
    );
  }
}
