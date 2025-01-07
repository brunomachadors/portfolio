import { test } from '@playwright/test';
import { ResumePage } from './pages/ResumePage';

test.describe('Resume', () => {
  test('Validate Resume Page content', async ({ page }) => {
    const resumePage = new ResumePage(page);

    await test.step('Resume Page', async () => {
      await resumePage.navigateToResume();
      await resumePage.validatePageLoaded();
    });

    await test.step('Timeline Sections', async () => {
      const sections = await resumePage.getTimelineSections();
      for (let i = 0; i < sections; i++) {
        await test.step(`Validate Section ${i}`, async () => {
          await resumePage.validateSection(i);
        });
      }
    });

    await test.step('Skills Button', async () => {
      await resumePage.validateGoToSkillsButton();
    });
  });
});
