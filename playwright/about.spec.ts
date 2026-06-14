import { test, expect } from '@playwright/test';

test('about page test', async ({ page }) => {
	await page.goto('./');

	await expect(page).toHaveTitle('Oskar Westmeijer');

	await expect(page.getByRole('heading', { name: 'Oskar Westmeijer' })).toBeVisible();
});
