import { expect, test } from '@playwright/test';

test.describe('Projects', () => {
  test('Accordion supports keyboard interaction', async ({ page }) => {
    await page.goto('/projects', { waitUntil: 'networkidle' });

    const firstToggle = page.getByTestId('section-toggle-0-0');
    const firstContent = page.getByTestId('section-content-0-0');

    await expect(firstToggle).toBeVisible();
    await expect(firstContent).toHaveCount(0);

    await firstToggle.press('Enter');

    await expect(firstContent).toBeVisible();
  });
});
