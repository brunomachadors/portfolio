import { expect, Page } from '@playwright/test';

export class SkillsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToSkills() {
    await this.page.goto('/skills', { waitUntil: 'commit' });
  }

  async validatePageLoaded() {
    const tabAll = this.page.getByTestId('tab-all');
    await expect(tabAll).toBeVisible();
  }

  async validateCategoryTab(category: string) {
    if (category.toLowerCase() === 'all') {
      const tabAll = this.page.getByTestId('tab-all');
      await expect(tabAll).toBeVisible();
      await tabAll.click();
    } else {
      const tabCategory = this.page.getByTestId(
        `tab-${category.toLowerCase().replace(/\s+/g, '-')}`
      );
      await expect(tabCategory).toBeVisible();
      await tabCategory.click();
    }
  }

  async validateSkill(skill: string, description: string) {
    const skillButton = this.page.getByTestId(
      `skill-${skill.toLowerCase().replace(/\s+/g, '-')}`
    );
    await expect(skillButton).toBeVisible();
    await skillButton.click();

    const skillDescriptionLocator = this.page.locator(
      `[data-testid="${skill.toLowerCase().replace(/\s+/g, '-')}-description"]`
    );
    await expect(skillDescriptionLocator).toBeVisible();
    await expect(skillDescriptionLocator).toHaveText(description);
  }

  async validateAllSkills(skills: { text: string; description: string }[]) {
    for (const { text, description } of skills) {
      await this.validateSkill(text, description);
    }
  }

  async validateSubCategory(subcategory: string) {
    const subcategoryTestId = `subcategory-title-${subcategory
      .toLowerCase()
      .replace(/\s+/g, '-')}`;
    await expect(this.page.getByTestId(subcategoryTestId)).toBeVisible();
  }

  async validateProjectButton() {
    await expect(this.page.getByTestId('projects-button')).toBeVisible();
  }
}
