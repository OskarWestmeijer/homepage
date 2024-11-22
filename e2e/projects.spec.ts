import { expect, test } from '@playwright/test'

test('projects page test', async ({ page }) => {
  await page.goto('./projects')

  await expect(page).toHaveTitle('Projects • Oskar Westmeijer')
})

test('weather-deployment link exists', async ({ page }) => {
  await page.goto('./projects')

  const visitLink = await page.getByRole('link', { name: 'Visit' }).first()
  await expect(visitLink).toBeVisible()
})

test('weather-github link works', async ({ page }) => {
  await page.goto('./projects')

  await page.locator('a[href="https://github.com/OskarWestmeijer/weather"]').click()

  await page.waitForURL('https://github.com/OskarWestmeijer/weather')
  expect(page.url()).toBe('https://github.com/OskarWestmeijer/weather')
})

test('flights-deployment link exists', async ({ page }) => {
  await page.goto('./projects')

  const visitLink = await page.getByRole('link', { name: 'Visit' }).nth(1)
  await expect(visitLink).toBeVisible()
})

test('flights-github link works', async ({ page }) => {
  await page.goto('./projects')

  await page.locator('a[href="https://github.com/OskarWestmeijer/flights"]').click()

  await page.waitForURL('https://github.com/OskarWestmeijer/flights')
  expect(page.url()).toBe('https://github.com/OskarWestmeijer/flights')
})
