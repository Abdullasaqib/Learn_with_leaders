import { test, expect } from '@playwright/test';

test.describe('Automated QA for Learn With Leaders', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Page Load and Critical Elements', async ({ page }) => {
    // Verify page title
    const title = await page.title();
    console.log(`Page Title: ${title}`);

    // Verify Main Heading
    const heading = page.getByRole('heading', { name: 'Welcome Back' });
    await expect(heading).toBeVisible();

    // Verify Inputs
    await expect(page.getByPlaceholder('Enter your email')).toBeVisible();
    await expect(page.getByPlaceholder('Enter your password')).toBeVisible();

    // Verify Sign In Button
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  });

  test('Navigation: Login -> Signup -> Login', async ({ page }) => {
    await page.click('text=Create your account');
    await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();

    await page.click('text=Sign In');
    await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
  });

  test('Navigation: Login -> Forgot Password -> Login', async ({ page }) => {
    await page.click('text=Forgot Password?');
    await expect(page.getByRole('heading', { name: 'Reset Your Password' })).toBeVisible();

    await page.click('text=Back to Login');
    await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
  });

  test('Form Validation: Empty Submission', async ({ page }) => {
    await page.click('button[type="submit"]');

    // Expect error message container to be visible
    const errorMessage = page.locator('.text-red-600');
    await expect(errorMessage).toBeVisible();

    const text = await errorMessage.textContent();
    console.log(`Validation Error: ${text}`);
  });

  test('Form Validation: Invalid Credentials', async ({ page }) => {
    await page.fill('input[type="email"]', 'qa_test_random_user@example.com');
    await page.fill('input[type="password"]', 'randompassword123');
    await page.click('button[type="submit"]');

    const errorMessage = page.locator('.text-red-600');
    await expect(errorMessage).toBeVisible();

    const text = await errorMessage.textContent();
    console.log(`Login Error: ${text}`);
  });

  test('Console and Network Errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    const failedRequests: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('response', response => {
      if (response.status() >= 400) {
        failedRequests.push(`${response.request().method()} ${response.url()} - ${response.status()}`);
      }
    });

    // Reload to capture startup errors
    await page.reload();
    await page.waitForTimeout(3000); // Wait for async loads

    if (consoleErrors.length > 0) {
        console.log('--- Console Errors ---');
        consoleErrors.forEach(e => console.log(e));
    } else {
        console.log('No Console Errors found.');
    }

    if (failedRequests.length > 0) {
        console.log('--- Failed Network Requests ---');
        failedRequests.forEach(e => console.log(e));
    } else {
        console.log('No Failed Network Requests found.');
    }

    // Fail test if critical errors found (optional, but good for QA)
    // expect(consoleErrors.length).toBe(0);
  });
});
