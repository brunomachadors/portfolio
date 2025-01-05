import { test } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('Home Page Validation', () => {
  test('Validate Home Page content', async ({ page }) => {
    const homePage = new HomePage(page);

    await test.step('Navigate to Home Page', async () => {
      await homePage.navigateToHome();
    });

    await test.step('Validate Title Visibility', async () => {
      await homePage.validateTitleVisible();
    });

    await test.step('Validate Subtitle Visibility', async () => {
      await homePage.validateSubtitleVisible();
    });
  });
});
