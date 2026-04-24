import { expect, test } from '@playwright/test';

test.describe('Talks', () => {
  test('Image modal supports focus, keyboard close, and scroll lock', async ({
    page,
  }) => {
    await page.goto('/talks', { waitUntil: 'networkidle' });

    const firstImageButton = page.getByTestId('talk-gallery-button-0-0');
    const modal = page.getByTestId('talk-image-modal');
    const closeButton = page.getByTestId('talk-image-modal-close');

    await expect(firstImageButton).toBeVisible();
    await firstImageButton.scrollIntoViewIfNeeded();

    await firstImageButton.click({ force: true });

    await expect(modal).toBeVisible();
    await expect(closeButton).toBeFocused();
    await expect
      .poll(async () => page.evaluate(() => document.body.style.overflow))
      .toBe('hidden');

    await page.keyboard.press('Escape');

    await expect(modal).toBeHidden();
    await expect
      .poll(async () => page.evaluate(() => document.body.style.overflow))
      .toBe('');
  });
});
