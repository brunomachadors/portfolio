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
    const session = this.page.getByTestId(`section-toggle-${index}`);
    await expect(session).toBeVisible();
    await session.scrollIntoViewIfNeeded();

    const contentLocator = this.page.getByTestId(`section-content-${index}`);

    // The toggle only responds once React has hydrated. Retrying blindly is not
    // safe here, because a second click on an already-open section closes it
    // again, so the expanded state is checked before every click.
    await expect(async () => {
      const isExpanded =
        (await session.getAttribute('aria-expanded')) === 'true';

      if (!isExpanded) {
        await session.click();
      }

      await expect(contentLocator).toBeVisible({ timeout: 1_000 });
    }).toPass({ timeout: 15_000 });
  }

  async focusSectionToggle(index: number) {
    const session = this.page.getByTestId(`section-toggle-${index}`);
    await expect(session).toBeVisible();
    await session.scrollIntoViewIfNeeded();
    await session.focus();
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
