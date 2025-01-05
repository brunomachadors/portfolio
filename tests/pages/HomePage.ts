import { Page, Locator, expect } from '@playwright/test';
import { HOME_DATA } from '../data';

export class HomePage {
  readonly page: Page;
  readonly titleLocator: Locator;
  readonly subtitleLocator: Locator;
  readonly startButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleLocator = page.locator('[data-test-id="home-title"]');
    this.subtitleLocator = page.locator('[data-test-id="home-description"]');
    this.startButtonLocator = page.locator(
      '[data-test-id="home-start-button"]'
    );
  }

  async navigateToHome() {
    await this.page.goto('/', { waitUntil: 'commit' });
  }

  async validateTitleVisible() {
    await expect(this.titleLocator).toBeVisible();
    await expect(this.titleLocator).toHaveText(HOME_DATA.title);
  }

  async validateSubtitleVisible() {
    await expect(this.subtitleLocator).toBeVisible();
    await expect(this.subtitleLocator).toHaveText(HOME_DATA.subtitle);
  }

  async validateStartButtonVisible() {
    await expect(this.startButtonLocator).toBeVisible();
    await expect(this.startButtonLocator).toHaveText(HOME_DATA.startButtonText);
  }
}
