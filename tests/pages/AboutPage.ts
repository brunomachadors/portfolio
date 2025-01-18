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
    const titleLocator = this.page.getByTestId('about-title');
    await expect(titleLocator).toBeVisible();
    await expect(titleLocator).toHaveText(expectedTitle);
  }

  async validateAboutDescription(expectedDescription: string) {
    const descriptionLocator = this.page.getByTestId('about-description');
    await expect(descriptionLocator).toBeVisible();
    await expect(descriptionLocator).toHaveText(expectedDescription);
  }

  async validateResumeButton(expectedText: string) {
    const buttonLocator = this.page.getByTestId('resume-button');
    await expect(buttonLocator).toBeVisible({ timeout: 5000 });
    await expect(buttonLocator).toHaveText(expectedText);
  }

  async validateAboutContainer() {
    const containerLocator = this.page.getByTestId('about-container');
    await expect(containerLocator).toBeVisible();
  }

  async clickSession(index: number) {
    const session = this.page.getByTestId(`section-${index}`);
    await session.click();

    const contentLocator = this.page.getByTestId(`section-content-${index}`);
    await this.page.waitForTimeout(300);
    if (!(await contentLocator.isVisible())) {
      await session.click();
      await this.page.waitForTimeout(300);
    }
  }

  async validateSectionTitleVisible(index: number, expectedTitle: string) {
    const titleLocator = this.page.getByTestId(`section-title-${index}`);
    await expect(titleLocator).toBeVisible();
    await expect(titleLocator).toHaveText(expectedTitle);
  }

  async validateSectionContentVisible(
    index: number,
    expectedContent: string | string[]
  ) {
    const contentLocator = this.page.getByTestId(`section-content-${index}`);

    if (!(await contentLocator.isVisible())) {
      await this.clickSession(index);
    }

    await expect(contentLocator).toBeVisible();

    if (Array.isArray(expectedContent)) {
      for (let i = 0; i < expectedContent.length; i++) {
        const lineLocator = contentLocator.getByTestId(
          `section-content-${index}-line-${i}`
        );
        await expect(lineLocator).toHaveText(expectedContent[i]);
      }
    } else {
      await expect(contentLocator).toHaveText(expectedContent);
    }
  }
}
