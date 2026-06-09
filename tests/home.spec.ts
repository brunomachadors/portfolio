import { test } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('Home', () => {
  test('Content Validation', async ({ page }) => {
    const homePage = new HomePage(page);

    await test.step('Go Home', async () => {
      await homePage.navigateToHome();
    });

    await test.step('Check Title', async () => {
      await homePage.validateTitleVisible();
    });

    await test.step('Check Subtitle', async () => {
      await homePage.validateSubtitleVisible();
    });

    await test.step('Check Start Button', async () => {
      await homePage.validateStartButtonVisible();
    });

    await test.step('Check Testimonials Section', async () => {
      await homePage.validateTestimonialsSectionVisible();
      await homePage.validateTestimonialCardsVisible();
    });

    await test.step('Check Education Section', async () => {
      await homePage.validateEducationSectionVisible();
      await homePage.validateEducationCardsVisible();
    });

    await test.step('Check Manual Testing Gallery', async () => {
      await homePage.validateManualTestingGalleryVisible();
      await homePage.expandManualTestingGallery();
    });

    await test.step('Check Frontend Automation Gallery', async () => {
      await homePage.validateFrontendAutomationGalleryVisible();
      await homePage.expandFrontendAutomationGallery();
    });

    await test.step('Check API Course Gallery Modal', async () => {
      await homePage.validateApiCourseGalleryVisible();
      await homePage.expandApiCourseGallery();
      await homePage.openApiCourseImageModal();
      await homePage.validateApiCourseImageModalVisible();
      await homePage.validateApiCourseImageKeyboardNavigation();
      await homePage.closeApiCourseImageModalWithEscape();
    });
  });
});
