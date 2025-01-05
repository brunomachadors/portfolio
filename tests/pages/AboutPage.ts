import { Page, expect } from '@playwright/test';

export class AboutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToAbout() {
    await this.page.goto('/about', { waitUntil: 'commit' });
  }

  async validatePageLoaded() {
    const imageLocator = this.page.getByRole('img', { name: 'Bruno Machado' });
    await expect(imageLocator).toBeVisible();
  }

  async validateAboutTitle(expectedTitle: string) {
    const titleLocator = this.page.locator('[data-test-id="about-title"]');
    await expect(titleLocator).toBeVisible();
    await expect(titleLocator).toHaveText(expectedTitle);
  }

  async validateAboutDescription(expectedDescription: string) {
    const descriptionLocator = this.page.locator(
      '[data-test-id="about-description"]'
    );
    await expect(descriptionLocator).toBeVisible();
    await expect(descriptionLocator).toHaveText(expectedDescription);
  }

  async validateResumeButton(expectedText: string) {
    const buttonLocator = this.page.locator('[data-test-id="resume-button"]');
    await expect(buttonLocator).toBeVisible({ timeout: 5000 });
    await expect(buttonLocator).toHaveText(expectedText);
  }

  async validateAboutContainer() {
    const containerLocator = this.page.locator(
      '[data-test-id="about-container"]'
    );
    await expect(containerLocator).toBeVisible();
  }

  async clickToggleIcon(index: number) {
    const toggleIcon = this.page.locator(
      `[data-test-id="toggle-icon-${index}"]`
    );
    await toggleIcon.click();

    const contentLocator = this.page.locator(
      `[data-test-id="section-content-${index}"]`
    );
    await this.page.waitForTimeout(300);
    if (!(await contentLocator.isVisible())) {
      await toggleIcon.click();
      await this.page.waitForTimeout(300);
    }
  }

  async validateSectionTitleVisible(index: number, expectedTitle: string) {
    const titleLocator = this.page.locator(
      `[data-test-id="section-title-${index}"]`
    );
    await expect(titleLocator).toBeVisible();
    await expect(titleLocator).toHaveText(expectedTitle);
  }

  async validateSectionContentVisible(
    index: number,
    expectedContent: string | string[]
  ) {
    const contentLocator = this.page.locator(
      `[data-test-id="section-content-${index}"]`
    );

    if (!(await contentLocator.isVisible())) {
      await this.clickToggleIcon(index);
    }

    await expect(contentLocator).toBeVisible();

    if (Array.isArray(expectedContent)) {
      for (let i = 0; i < expectedContent.length; i++) {
        const lineLocator = contentLocator.locator(
          `[data-test-id="section-content-${index}-line-${i}"]`
        );
        await expect(lineLocator).toHaveText(expectedContent[i]);
      }
    } else {
      await expect(contentLocator).toHaveText(expectedContent);
    }
  }
}
