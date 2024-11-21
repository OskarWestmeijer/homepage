import { expect, test } from '@playwright/test'

test('projects page test', async ({ page }) => {
  await page.goto('http://localhost:5173/projects')

  await expect(page).toHaveTitle('Projects • Oskar Westmeijer')
})

test('weather-deployment link works', async ({ page }) => {
  await page.goto('http://localhost:5173/projects')

  await page.getByRole('link', { name: 'Visit' }).first().click()

  await page.waitForURL('https://weather.oskar-westmeijer.com/')
  expect(page.url()).toBe('https://weather.oskar-westmeijer.com/')
})

test('weather-github link works', async ({ page }) => {
  await page.goto('http://localhost:5173/projects')

  await page.locator('a[href="https://github.com/OskarWestmeijer/weather"]').click()

  await page.waitForURL('https://github.com/OskarWestmeijer/weather')
  expect(page.url()).toBe('https://github.com/OskarWestmeijer/weather')
})

test('flights-deployment link works', async ({ page }) => {
  await page.goto('http://localhost:5173/projects')

  await page.getByRole('link', { name: 'Visit' }).nth(1).click()

  await page.waitForURL('https://flights.oskar-westmeijer.com/')
  expect(page.url()).toBe('https://flights.oskar-westmeijer.com/')
})

test('flights-github link works', async ({ page }) => {
  await page.goto('http://localhost:5173/projects')

  await page.locator('a[href="https://github.com/OskarWestmeijer/flights"]').click()

  await page.waitForURL('https://github.com/OskarWestmeijer/flights')
  expect(page.url()).toBe('https://github.com/OskarWestmeijer/flights')
})
