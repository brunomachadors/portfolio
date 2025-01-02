import { test } from '@playwright/test';
import { MenuPage } from './pages/MenuPage';

test.describe('Menu Navigation', () => {
  test('Validate menu navigation for desktop', async ({ page }) => {
    const menuPage = new MenuPage(page);

    test.step('Navigate to Home Page', async () => {
      await menuPage.navigateToHome();
    });

    const menuOptions = [
      'home',
      'about',
      'resume',
      'skills',
      'projects',
      'posts',
      'contacts',
    ];

    for (const option of menuOptions) {
      await test.step(`Validate visibility of menu item: ${option}`, async () => {
        await menuPage.validateMenuItemVisible(option);
      });

      await test.step(`Click and validate navigation to: ${option}`, async () => {
        await menuPage.clickMenuItem(option);
        await menuPage.validateURL(option);
      });
    }
  });
});
