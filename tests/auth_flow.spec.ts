import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should complete the full login journey', async ({ page }) => {
    await page.goto('/');

    // 1. Login Page
    await expect(page.getByText('Welcome to Your Leadership Journey')).toBeVisible();
    await page.getByPlaceholder('Enter your email').fill('user@test.com');
    await page.getByPlaceholder('Enter your password').fill('password');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // 2. Verification Page
    await expect(page.getByText('Verify your account')).toBeVisible();
    // Check if we can see the code inputs
    const inputs = await page.locator('input[type="text"]').count();
    expect(inputs).toBeGreaterThan(0);
    await page.getByRole('button', { name: 'Verify Now' }).click();

    // 3. Interest Selection
    await expect(page.getByText('What sparks your curiosity?')).toBeVisible();

    // Select 3 interests to enable the Next button
    await page.getByRole('button', { name: 'Software Development' }).click();
    await page.getByRole('button', { name: 'Entrepreneurship', exact: true }).click();
    await page.getByRole('button', { name: 'Graphic Design' }).click();

    await page.getByRole('button', { name: 'Next' }).click();

    // 4. Dashboard
    await expect(page.getByText('Good Morning Sarah!')).toBeVisible();
  });
});
