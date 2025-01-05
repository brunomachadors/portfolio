import { test } from '@playwright/test';
import { MenuPage } from './pages/MenuPage';
import { HEADER_DATA } from './data';

test.describe('Menu Navigation', () => {
  test('Validate menu navigation for desktop and mobile', async ({
    page,
    isMobile,
  }) => {
    const menuPage = new MenuPage(page);

    await test.step('Navigate to Home Page', async () => {
      await menuPage.navigateToHome();
    });

    const mobileMenuOptions = HEADER_DATA.menuOptions.slice(1);

    if (isMobile) {
      for (const option of mobileMenuOptions) {
        await test.step(`Open Mobile Menu for: ${option}`, async () => {
          await menuPage.openMobileMenu();
        });

        await test.step(`Validate visibility of mobile menu item: ${option}`, async () => {
          await menuPage.validateMobileMenuItemVisible(option);
        });

        await test.step(`Click and validate navigation to mobile menu item: ${option}`, async () => {
          await menuPage.clickMobileMenuItem(option);
          await menuPage.validateURL(option);
        });
      }
    } else {
      for (const option of HEADER_DATA.menuOptions) {
        await test.step(`Validate visibility of menu item: ${option}`, async () => {
          await menuPage.validateMenuItemVisible(option);
        });

        await test.step(`Click and validate navigation to menu item: ${option}`, async () => {
          await menuPage.clickMenuItem(option);
          await menuPage.validateURL(option);
        });
      }
    }
  });
});
