import { Page, Locator, expect } from '@playwright/test';
import { HOME_DATA } from '../data/test-data';

export class HomePage {
  readonly page: Page;
  readonly titleLocator: Locator;
  readonly subtitleLocator: Locator;
  readonly startButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleLocator = page.getByTestId('home-title');
    this.subtitleLocator = page.getByTestId('home-description');
    this.startButtonLocator = page.getByTestId('home-start-button');
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
