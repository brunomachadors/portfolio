import { Page, Locator, expect } from '@playwright/test';
import { HOME_DATA } from '../data/test-data';

export class HomePage {
  readonly page: Page;
  readonly titleLocator: Locator;
  readonly subtitleLocator: Locator;
  readonly startButtonLocator: Locator;
  readonly testimonialsSectionLocator: Locator;
  readonly educationSectionLocator: Locator;
  readonly manualTestingGalleryLocator: Locator;
  readonly manualTestingGalleryToggleLocator: Locator;
  readonly frontendAutomationGalleryLocator: Locator;
  readonly frontendAutomationGalleryToggleLocator: Locator;
  readonly apiCourseGalleryLocator: Locator;
  readonly apiCourseGalleryButtonLocator: Locator;
  readonly apiCourseGalleryToggleLocator: Locator;
  readonly educationImageModalLocator: Locator;
  readonly educationImageModalCloseLocator: Locator;
  readonly educationImageModalPreviousLocator: Locator;
  readonly educationImageModalNextLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleLocator = page.getByTestId('home-title');
    this.subtitleLocator = page.getByTestId('home-description');
    this.startButtonLocator = page.getByTestId('home-start-button');
    this.testimonialsSectionLocator = page.getByTestId('testimonials-section');
    this.educationSectionLocator = page.getByTestId('education-section');
    this.manualTestingGalleryLocator = page.getByTestId(
      'education-gallery-warm-up-manual-testing'
    );
    this.manualTestingGalleryToggleLocator = page.getByTestId(
      'education-gallery-toggle-warm-up-manual-testing'
    );
    this.frontendAutomationGalleryLocator = page.getByTestId(
      'education-gallery-warm-up-automated-tests-playwright'
    );
    this.frontendAutomationGalleryToggleLocator = page.getByTestId(
      'education-gallery-toggle-warm-up-automated-tests-playwright'
    );
    this.apiCourseGalleryLocator = page.getByTestId(
      'education-gallery-backend-testing-postman-playwright'
    );
    this.apiCourseGalleryButtonLocator = page.getByTestId(
      'education-gallery-button-backend-testing-postman-playwright-0'
    );
    this.apiCourseGalleryToggleLocator = page.getByTestId(
      'education-gallery-toggle-backend-testing-postman-playwright'
    );
    this.educationImageModalLocator = page.getByTestId('education-image-modal');
    this.educationImageModalCloseLocator = page.getByTestId(
      'education-image-modal-close'
    );
    this.educationImageModalPreviousLocator = page.getByTestId(
      'education-image-modal-prev'
    );
    this.educationImageModalNextLocator = page.getByTestId(
      'education-image-modal-next'
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

  async validateTestimonialsSectionVisible() {
    await expect(this.testimonialsSectionLocator).toBeVisible();
    await expect(
      this.page.getByRole('heading', { name: HOME_DATA.testimonialsTitle })
    ).toBeVisible();
  }

  async validateTestimonialCardsVisible() {
    for (const title of HOME_DATA.testimonialTitles) {
      await expect(
        this.testimonialsSectionLocator.getByRole('heading', { name: title })
      ).toBeVisible();
    }
  }

  async validateEducationSectionVisible() {
    await expect(this.educationSectionLocator).toBeVisible();
    await expect(
      this.page.getByRole('heading', { name: HOME_DATA.educationTitle })
    ).toBeVisible();
  }

  async validateEducationCardsVisible() {
    for (const title of HOME_DATA.educationTitles) {
      await expect(
        this.educationSectionLocator.getByRole('heading', { name: title })
      ).toBeVisible();
    }
  }

  async validateApiCourseGalleryVisible() {
    await expect(this.apiCourseGalleryLocator).toBeVisible();
    await expect(
      this.apiCourseGalleryLocator.getByRole('button')
    ).toHaveCount(HOME_DATA.apiCourseGalleryPreviewCount + 1);
    await expect(this.apiCourseGalleryButtonLocator).toBeVisible();
    await expect(this.apiCourseGalleryToggleLocator).toBeVisible();
    await expect(this.apiCourseGalleryToggleLocator).toHaveText(
      'Show all photos'
    );
    await expect(this.apiCourseGalleryToggleLocator).toHaveAttribute(
      'aria-expanded',
      'false'
    );
    await expect(
      this.apiCourseGalleryButtonLocator.getByRole('img', {
        name: HOME_DATA.apiCourseImageAlt,
      })
    ).toBeVisible();
  }

  async validateManualTestingGalleryVisible() {
    await expect(this.manualTestingGalleryLocator).toBeVisible();
    await expect(
      this.manualTestingGalleryLocator.getByRole('button')
    ).toHaveCount(HOME_DATA.apiCourseGalleryPreviewCount + 1);
    await expect(this.manualTestingGalleryToggleLocator).toHaveText(
      'Show all photos'
    );
    await expect(this.manualTestingGalleryToggleLocator).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  }

  async validateFrontendAutomationGalleryVisible() {
    await expect(this.frontendAutomationGalleryLocator).toBeVisible();
    await expect(
      this.frontendAutomationGalleryLocator.getByRole('button')
    ).toHaveCount(HOME_DATA.apiCourseGalleryPreviewCount + 1);
    await expect(this.frontendAutomationGalleryToggleLocator).toHaveText(
      'Show all photos'
    );
    await expect(this.frontendAutomationGalleryToggleLocator).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  }

  async expandManualTestingGallery() {
    await this.activateGalleryToggle(this.manualTestingGalleryToggleLocator);
    await expect(
      this.manualTestingGalleryLocator.getByRole('button')
    ).toHaveCount(HOME_DATA.manualTestingGalleryImageCount + 1);
    await expect(this.manualTestingGalleryToggleLocator).toHaveText(
      'Show fewer photos'
    );
    await expect(this.manualTestingGalleryToggleLocator).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    await expect(this.apiCourseGalleryToggleLocator).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  }

  async expandFrontendAutomationGallery() {
    await this.activateGalleryToggle(this.frontendAutomationGalleryToggleLocator);
    await expect(
      this.frontendAutomationGalleryLocator.getByRole('button')
    ).toHaveCount(HOME_DATA.frontendAutomationGalleryImageCount + 1);
    await expect(this.frontendAutomationGalleryToggleLocator).toHaveText(
      'Show fewer photos'
    );
    await expect(this.frontendAutomationGalleryToggleLocator).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    await expect(this.manualTestingGalleryToggleLocator).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    await expect(this.apiCourseGalleryToggleLocator).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  }

  async expandApiCourseGallery() {
    await this.activateGalleryToggle(this.apiCourseGalleryToggleLocator);
    await expect(
      this.apiCourseGalleryLocator.getByRole('button')
    ).toHaveCount(HOME_DATA.apiCourseGalleryImageCount + 1);
    await expect(this.apiCourseGalleryToggleLocator).toHaveText(
      'Show fewer photos'
    );
    await expect(this.apiCourseGalleryToggleLocator).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  }

  async activateGalleryToggle(toggleLocator: Locator) {
    await toggleLocator.scrollIntoViewIfNeeded();
    await toggleLocator.focus();
    await this.page.keyboard.press('Enter');

    try {
      await expect(toggleLocator).toHaveAttribute('aria-expanded', 'true', {
        timeout: 1_000,
      });
      return;
    } catch {
      await toggleLocator.click({ force: true });
    }
  }

  async openApiCourseImageModal() {
    await this.apiCourseGalleryButtonLocator.scrollIntoViewIfNeeded();
    await this.apiCourseGalleryButtonLocator.focus();
    await this.page.keyboard.press('Enter');

    if (await this.waitForApiCourseImageModal()) {
      return;
    }

    await this.apiCourseGalleryButtonLocator.click();

    if (await this.waitForApiCourseImageModal()) {
      return;
    }

    await this.apiCourseGalleryButtonLocator.evaluate(
      (button: HTMLButtonElement) => button.click()
    );
  }

  async waitForApiCourseImageModal() {
    try {
      await this.educationImageModalLocator.waitFor({
        state: 'visible',
        timeout: 1_000,
      });
      return true;
    } catch {
      return false;
    }
  }

  async validateApiCourseImageModalVisible() {
    await expect(this.educationImageModalLocator).toBeVisible();
    await expect(this.educationImageModalCloseLocator).toBeFocused();
    await expect(this.educationImageModalPreviousLocator).toBeVisible();
    await expect(this.educationImageModalNextLocator).toBeVisible();
    await expect(
      this.educationImageModalLocator.getByRole('img', {
        name: HOME_DATA.apiCourseImageAlt,
      })
    ).toBeVisible();
    await expect
      .poll(async () => this.page.evaluate(() => document.body.style.overflow))
      .toBe('hidden');
  }

  async validateApiCourseImageKeyboardNavigation() {
    await this.page.keyboard.press('ArrowRight');
    await expect(
      this.educationImageModalLocator.getByRole('img', {
        name: HOME_DATA.apiCourseSecondImageAlt,
      })
    ).toBeVisible();

    await this.page.keyboard.press('ArrowLeft');
    await expect(
      this.educationImageModalLocator.getByRole('img', {
        name: HOME_DATA.apiCourseImageAlt,
      })
    ).toBeVisible();
  }

  async closeApiCourseImageModalWithEscape() {
    await this.page.keyboard.press('Escape');
    await expect(this.educationImageModalLocator).toBeHidden();
    await expect
      .poll(async () => this.page.evaluate(() => document.body.style.overflow))
      .toBe('');
  }
}
