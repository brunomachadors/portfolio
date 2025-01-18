import { Page, Locator, expect } from '@playwright/test';

export class ResumePage {
  readonly page: Page;
  readonly timelineContainer: Locator;
  readonly backToTimelineButton: Locator;
  readonly goToSkillsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.timelineContainer = page.getByTestId('resume-timeline');
    this.backToTimelineButton = page.getByTestId('back-to-timeline-button');
    this.goToSkillsButton = page.getByTestId('skills-button');
  }

  async navigateToResume() {
    await this.page.goto('/resume', { waitUntil: 'commit' });
  }

  async validatePageLoaded() {
    await expect(this.timelineContainer).toBeVisible();
  }

  async getTimelineSections() {
    return this.page.getByTestId(/^resume-item-details-/).count();
  }

  async validateSection(index: number) {
    const company = this.page.getByTestId(`resume-item-company-${index}`);
    const role = this.page.getByTestId(`resume-item-role-${index}`);
    const period = this.page.getByTestId(`resume-item-period-${index}`);
    const shortDescription = this.page.getByTestId(
      `resume-item-description-${index}`
    );
    const year = this.page.getByTestId(`resume-item-year-${index}`);

    await expect(company).toBeVisible();
    await expect(role).toBeVisible();
    await expect(period).toBeVisible();
    await expect(shortDescription).toBeVisible();
    await expect(year).toBeVisible();
  }

  async validateGoToSkillsButton() {
    await expect(this.goToSkillsButton).toBeVisible();
    await expect(this.goToSkillsButton).toHaveText('Go to Skills');
  }
}
