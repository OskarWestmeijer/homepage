import { test, expect } from '@playwright/test'

test('about page test', async ({ page }) => {
  await page.goto('./')

  await expect(page).toHaveTitle('About • Oskar Westmeijer')
  await expect(page.getByRole('heading', { name: 'Oskar Westmeijer' }).nth(1)).toBeVisible()
})
