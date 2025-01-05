import { test } from '@playwright/test';
import { FooterPage } from './pages/FooterPage';
import { FOOTER_DATA } from './data';

test.describe('Footer Validation', () => {
  test('Validate footer content and links', async ({ page }) => {
    const footerPage = new FooterPage(page);

    await test.step('Navigate to Home Page', async () => {
      await page.goto('/');
    });

    await test.step('Validate footer is visible', async () => {
      await footerPage.validateFooterVisible();
    });

    for (const link of FOOTER_DATA.links) {
      await test.step(`Validate ${link} link is visible and has a valid URL`, async () => {
        await footerPage.validateLinkVisible(link);
      });
    }

    await test.step('Validate copyright text', async () => {
      await footerPage.validateCopyrightText('© 2024 Bruno Machado.');
    });
  });
});
