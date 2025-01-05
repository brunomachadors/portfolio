import { test } from '@playwright/test';
import { AboutPage } from './pages/AboutPage';
import { ABOUT_DATA } from './data/test-data';

test.describe('About Page', () => {
  test('Content', async ({ page }) => {
    const aboutPage = new AboutPage(page);

    await test.step('Navigate', async () => {
      await aboutPage.navigateToAbout();
      await aboutPage.validatePageLoaded();
    });

    await test.step('Container', async () => {
      await aboutPage.validateAboutContainer();
    });

    await test.step('Title', async () => {
      await aboutPage.validateAboutTitle(ABOUT_DATA.aboutTitle);
    });

    await test.step('Description', async () => {
      await aboutPage.validateAboutDescription(ABOUT_DATA.aboutDescription);
    });

    await test.step('Resume Button', async () => {
      await aboutPage.validateResumeButton('Go to Resume');
    });

    for (let i = 0; i < ABOUT_DATA.sections.length; i++) {
      const { title, content } = ABOUT_DATA.sections[i];

      await test.step(`Section ${i}: ${title}`, async () => {
        await aboutPage.clickToggleIcon(i);
        await aboutPage.validateSectionTitleVisible(i, title);
        await aboutPage.validateSectionContentVisible(i, content);
      });
    }
  });
});
