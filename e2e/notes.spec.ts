import { test, expect } from '@playwright/test'

test('notes page test', async ({ page }) => {
  await page.goto('http://localhost:5173/notes')

  await expect(page).toHaveTitle('Notes • Oskar Westmeijer')
})
