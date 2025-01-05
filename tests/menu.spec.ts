import { test } from '@playwright/test';
import { MenuPage } from './pages/MenuPage';
import { HEADER_DATA } from './data';

test.describe('Menu', () => {
  test('Navigation Validation', async ({ page, isMobile }) => {
    const menuPage = new MenuPage(page);

    await test.step('Go Home', async () => {
      await menuPage.navigateToHome();
    });

    const mobileMenuOptions = HEADER_DATA.menuOptions.slice(1);

    if (isMobile) {
      for (const option of mobileMenuOptions) {
        await test.step(`Open Mobile: ${option}`, async () => {
          await menuPage.openMobileMenu();
        });

        await test.step(`Check Mobile Item: ${option}`, async () => {
          await menuPage.validateMobileMenuItemVisible(option);
        });

        await test.step(`Click Mobile Item: ${option}`, async () => {
          await menuPage.clickMobileMenuItem(option);
          await menuPage.validateURL(option);
        });
      }
    } else {
      for (const option of HEADER_DATA.menuOptions) {
        await test.step(`Check Item: ${option}`, async () => {
          await menuPage.validateMenuItemVisible(option);
        });

        await test.step(`Click Item: ${option}`, async () => {
          await menuPage.clickMenuItem(option);
          await menuPage.validateURL(option);
        });
      }
    }
  });
});
