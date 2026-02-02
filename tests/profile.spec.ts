import { test, expect } from '@playwright/test';

test.describe('Profile Features', () => {
  test.beforeEach(async ({ page }) => {
    // Quick login sequence
    await page.goto('/');

    // Fill required fields
    await page.getByPlaceholder('Enter your email').fill('test@profile.com');
    await page.getByPlaceholder('Enter your password').fill('password');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('button', { name: 'Verify Now' }).click();

    // Select interests
    await page.getByRole('button', { name: 'Software Development' }).click();
    await page.getByRole('button', { name: 'Entrepreneurship', exact: true }).click();
    await page.getByRole('button', { name: 'Graphic Design' }).click();
    await page.getByRole('button', { name: 'Next' }).click();

    // Go to profile
    await page.getByRole('button', { name: 'My Profile' }).click();
  });

  test('should open add achievement drawer', async ({ page }) => {
    await page.getByRole('button', { name: 'Add Achievement' }).first().click();

    await expect(page.getByText('Showcase your success story')).toBeVisible();
    await expect(page.getByPlaceholder('Achievement Title')).toBeVisible();
    await expect(page.getByPlaceholder('Issuing Organization')).toBeVisible();
  });

  test('should validate form inputs in drawer', async ({ page }) => {
    await page.getByRole('button', { name: 'Add Achievement' }).first().click();

    // Try to generate without inputs
    await page.getByRole('button', { name: 'Generate Description' }).click();

    // Expect an alert
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Please provide a title and organization');
      await dialog.dismiss();
    });
  });
});
