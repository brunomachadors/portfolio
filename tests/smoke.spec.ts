import { test, expect } from '@playwright/test';

test('should load the homepage and have the correct title', async ({
  page,
}) => {
  // Navega para a URL base
  await page.goto('/');

  // Verifica se o título da página contém o esperado
  await expect(page).toHaveTitle(/Bruno Machado | QA Engineer Portfolio/); // Substitua pelo título esperado
});

test('should display the main header', async ({ page }) => {
  // Navega para a URL base
  await page.goto('/');

  // Verifica se o cabeçalho principal está visível
  await expect(
    page.getByRole('heading', { name: 'Welcome to My Portfolio' })
  ).toBeVisible(); // Substitua pelo texto esperado
});
