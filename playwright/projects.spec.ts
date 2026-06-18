import { expect, test } from '@playwright/test';

test('projects page test title', async ({ page }) => {
	await page.goto('./projects');
	await expect(page).toHaveTitle('Oskar Westmeijer');
});

test('weather project exists', async ({ page }) => {
	await page.goto('./projects');
	await expect(page.getByRole('heading', { name: 'weather' })).toBeVisible();
});

test('weather project detail page', async ({ page }) => {
	await page.goto('./projects');

	await page.getByRole('heading', { name: 'weather' }).click();

	await expect(page).toHaveURL(/\/projects\/weather\/?$/);
	await expect(page.getByRole('heading', { name: 'weather' })).toBeVisible();
	await expect(page.getByRole('link', { name: /view repo/i })).toBeVisible();
});

test('back link from project detail returns to projects list', async ({ page }) => {
	await page.goto('./projects/weather');

	await page.locator('a[href="/projects"]').first().click();

	await expect(page).toHaveURL(/\/projects\/?$/);
});
