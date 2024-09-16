import { test, expect } from '@playwright/test';

test.describe('Contact Page Load', () => {

  test('should load the contact page with correct title and form elements', async ({ page }) => {
    await page.goto('http://www.helpcodeit.com/contact'); // Replace with your actual URL

    // Check if the page title is correct
    await expect(page).toHaveTitle('Contact Us | Help Code It');

    // Check if the form fields are visible
    await expect(page.locator('input#name')).toBeVisible();
    await expect(page.locator('input#email')).toBeVisible();
    await expect(page.locator('textarea#message')).toBeVisible();

    // Check if the submit button is visible
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });
});