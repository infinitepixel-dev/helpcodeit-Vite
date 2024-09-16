import { test, expect } from '@playwright/test'

test.describe('HomePage', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('/')
  })

  test('should render the homepage correctly', async ({ page }) => {
    // Check that the page title is correct
    await expect(page).toHaveTitle('Help Code It | Resources for Beginning Developers')

    // Check for the presence of key elements
    await expect(page.locator('text=Visit our YouTube Channel')).toBeVisible()
    await expect(page.locator('text=Join our Discord Server')).toBeVisible()
    await expect(page.locator('text=Explore Meeting Options')).toBeVisible()
    await expect(page.locator('text=Upcoming Event')).toBeVisible()
  })

  test('should have working external links', async ({ page }) => {
    // Check YouTube link
    const youtubeLink = page.locator('a:has-text("Visit our YouTube Channel")')
    await expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/@HelpCodeIt')

    // Check Discord link
    const discordLink = page.locator('a:has-text("Join our Discord Server")')
    await expect(discordLink).toHaveAttribute('href', 'https://discord.gg/sDtKwcuK3J')
  })

  test('should navigate to the meeting options page', async ({ page }) => {
    // Click on the "Explore Meeting Options" button
    const meetingButton = page.locator('button:has-text("Explore Meeting Options")')
    await meetingButton.click()

    // Verify that the page navigates to the meeting page
    await expect(page).toHaveURL('/schedule-meeting')
  })

  test('x/twitter icon should render on page', async ({ page }) => {
    const twitterButton = page.locator('a:has-text("Follow us @HelpCodeIt")')

    // Check that the Twitter icon is visible
    await expect(twitterButton).toBeVisible()
    
  })
})