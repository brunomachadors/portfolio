import test from 'playwright/test';
import { SkillsPage } from './pages/skillsPage';
import { SKILLS } from '@/app/content/skills';

test.describe('Skills Page', () => {
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

    for (const { category, subcategories } of SKILLS) {
      await test.step(`Category: ${category}`, async () => {
        await skillsPage.validateCategoryTab(category);

        for (const { name, items } of subcategories) {
          await test.step(`Subcategory: ${name}`, async () => {
            await skillsPage.validateSubCategory(name);
          });

          for (const { text, description } of items) {
            await test.step(`Skill: ${text}`, async () => {
              await skillsPage.validateSkill(text, description);
            });
          }
        }
      });
    }
  });
});
