import { expect, test } from '@playwright/test'

test('projects page test title', async ({ page }) => {
  await page.goto('./projects')

  await expect(page).toHaveTitle('Projects • Oskar Westmeijer')
})

test('weather project exists', async ({ page }) => {
  await page.goto('./projects')

  const weatherDiv = page.getByText(/weather/i)
  await expect(weatherDiv).toBeVisible()
})