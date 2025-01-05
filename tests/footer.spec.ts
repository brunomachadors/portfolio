import { test } from '@playwright/test';
import { FooterPage } from './pages/FooterPage';
import { FOOTER_DATA } from './data/test-data';

test.describe('Footer', () => {
  test('Links and Visibility', async ({ page }) => {
    const footerPage = new FooterPage(page);

    await test.step('Go Home', async () => {
      await page.goto('/');
    });

    await test.step('Footer Visible', async () => {
      await footerPage.validateFooterVisible();
    });

    for (const link of FOOTER_DATA.links) {
      await test.step(`Check ${link}`, async () => {
        await footerPage.validateLinkVisible(link);
      });
    }

    await test.step('Copyright', async () => {
      await footerPage.validateCopyrightText('© 2024 Bruno Machado.');
    });
  });
});
