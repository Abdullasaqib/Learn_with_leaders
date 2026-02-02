import { test, expect } from '@playwright/test';

test.describe('Navigation Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Enter your email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').fill('password');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page.getByText('Verify your account')).toBeVisible();
    await page.getByRole('button', { name: 'Verify Now' }).click();

    await expect(page.getByText('What sparks your curiosity?')).toBeVisible();

    await page.getByRole('button', { name: 'Software Development' }).click();
    await page.getByRole('button', { name: 'Entrepreneurship', exact: true }).click();
    await page.getByRole('button', { name: 'Graphic Design' }).click();

    await page.getByRole('button', { name: 'Next' }).click();

    await expect(page.getByText('Good Morning Sarah!')).toBeVisible();
  });

  test('should navigate between tabs', async ({ page }) => {
    // Dashboard is default
    await expect(page.getByText('Find Your Dream Program')).toBeVisible();

    // Click My Programs
    await page.getByRole('button', { name: 'My Programs' }).click();
    await expect(page.getByRole('heading', { name: 'My Programs' })).toBeVisible();
    await expect(page.getByText('Full Stack Web Development')).toBeVisible();

    // Click Explore Programs
    await page.getByRole('button', { name: 'Explore Programs' }).click();
    await expect(page.getByPlaceholder('Search programs, universities, or topics...')).toBeVisible();

    // Click My Profile
    await page.getByRole('button', { name: 'My Profile' }).click();
    await expect(page.getByText('Personal Information')).toBeVisible();
  });
});
