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
  });
});
