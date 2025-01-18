import test from 'playwright/test';
import { SkillsPage } from './pages/skillsPage';
import { SKILLS } from '@/app/content/skills';

test.describe('Skills', () => {
  test('Content', async ({ page }) => {
    const skillsPage = new SkillsPage(page);

    await test.step('Navigate', async () => {
      await skillsPage.navigateToSkills();
      await skillsPage.validatePageLoaded();
    });

    await test.step('Filters', async () => {
      for (const { category } of SKILLS) {
        await skillsPage.validateCategoryTab(category);
      }
    });
    await test.step(`Category`, async () => {
      for (const { category, subcategories } of SKILLS) {
        await test.step(`${category}`, async () => {
          await test.step(`Visible`, async () => {
            await skillsPage.validateCategoryTab(category);
          });
          await test.step(`Subcategories`, async () => {
            for (const { name, items } of subcategories) {
              await test.step(`${name}`, async () => {
                await skillsPage.validateSubCategory(name);
              });
              await test.step(`Skills`, async () => {
                for (const { text, description } of items) {
                  await test.step(` ${text}`, async () => {
                    await skillsPage.validateSkill(text, description);
                  });
                }
              });
            }
          });
        });
      }
    });
  });
});
