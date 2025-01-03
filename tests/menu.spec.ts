import { test } from '@playwright/test';
import { MenuPage } from './pages/MenuPage';

const menuOptions = [
  'home',
  'about',
  'resume',
  'skills',
  'projects',
  'posts',
  'contacts',
];

test.describe('Menu Navigation', () => {
  test('Validate menu navigation for desktop and mobile', async ({
    page,
    isMobile,
  }) => {
    const menuPage = new MenuPage(page);
    await menuPage.navigateToHome();

    const mobileMenuOptions = menuOptions.slice(1);
    if (isMobile) {
      for (const option of mobileMenuOptions) {
        await menuPage.openMobileMenu();
        await menuPage.validateMobileMenuItemVisible(option);
        await menuPage.clickMobileMenuItem(option);
        await menuPage.validateURL(option);
      }
    } else {
      for (const option of menuOptions) {
        await menuPage.validateMenuItemVisible(option);
        await menuPage.clickMenuItem(option);
        await menuPage.validateURL(option);
      }
    }
  });
});
