import { test, expect } from '@playwright/test'

test.describe('AboutPage', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the About page before each test
        await page.goto('/about')
    })

    test('should render the About page correctly', async ({ page }) => {
        // Check that the page title is correct
        await expect(page).toHaveTitle('About Us | Help Code It')

        // Check for the presence of key elements
        await expect(page.locator('h1:has-text("About")')).toBeVisible()
        await expect(page.locator('h2:has-text("Michael Varnell")')).toBeVisible()
        await expect(page.locator('h2:has-text("Matthew Cox")')).toBeVisible()
        await expect(page.locator('img[alt="Michael Varnell"]')).toBeVisible()
        await expect(page.locator('img[alt="Matthew Cox"]')).toBeVisible()
    })

    test('should have working external links for Michael', async ({ page }) => {
        // Check Michael's meeting link
        const michaelMeetingLink = page.locator('a[href="https://calendly.com/michaelvarnell/30min"]')
        await expect(michaelMeetingLink).toHaveAttribute('target', '_blank')
        await expect(michaelMeetingLink).toHaveAttribute('rel', 'noreferrer')
    })

    
})