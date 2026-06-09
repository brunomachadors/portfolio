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

  test('AI & Agents content', async ({ page }) => {
    const skillsPage = new SkillsPage(page);
    const aiCategory = SKILLS.find(
      ({ category }) => category === 'AI & Agents'
    );

    if (!aiCategory) {
      throw new Error('AI & Agents category was not found in skills content.');
    }

    await test.step('Navigate', async () => {
      await skillsPage.navigateToSkills();
      await skillsPage.validatePageLoaded();
    });

    await test.step('Open AI & Agents category', async () => {
      await skillsPage.validateCategoryTab(aiCategory.category);
    });

    await test.step('Validate AI subcategories', async () => {
      for (const { name } of aiCategory.subcategories) {
        await skillsPage.validateSubCategory(name);
      }
    });

    await test.step('Validate core AI skill buttons', async () => {
      const coreSkills = aiCategory.subcategories.flatMap(({ items }) =>
        items.filter(({ text }) =>
          [
            'Claude',
            'Codex',
            'AI Agents',
            'LLM API Orchestration',
            'AI-Assisted Testing',
          ].includes(text)
        )
      );

      for (const { text } of coreSkills) {
        await skillsPage.validateSkillButtonVisible(text);
      }
    });
  });
});
