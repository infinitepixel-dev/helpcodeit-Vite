import { test, expect } from '@playwright/test';
import { componentRoutes } from '../src/Routes/Routes'; // Adjust the path to your Routes.js file

test.describe('Component Routes', () => {
  for (const route of componentRoutes) {
    // Skip routes that include an asterisk (*)
    if (route.path.includes('*')) {
      continue;
    }

    test(`should load ${route.path} without errors - ${route.path}`, async ({ page }) => {
      await page.goto(`http://localhost:5174${route.path}`); // Adjust the base URL to match your development server
      await expect(page).toHaveURL(`http://localhost:5174${route.path}`);
      await expect(page.locator('body')).not.toHaveText('Error'); // Adjust the selector and text to match your error handling
    })

}
});
