import { expect } from '@playwright/test';
import {testFactory, waitForHydrate} from './test-utils.js';

const test = testFactory({ root: './fixtures/route-groups/' });

let devServer;

test.beforeAll(async ({ astro }) => {
	devServer = await astro.startDevServer();
});

test.afterAll(async () => {
	await devServer.stop();
});

test.describe('', () => {
	test('should navigate to index page', async ({ page, astro }) => {
		await page.goto(astro.resolveUrl('/'));
		await expect(page.locator('h1')).toHaveText('Welcome to Our Site');
	});

	test('should navigate to /about', async ({ page, astro }) => {
		await page.goto(astro.resolveUrl('/about'));
		await expect(page.locator('h1')).toHaveText('About us');
	});
	
	test('should navigate to dynamic /user/[hash]/profile', async ({ page, astro }) => {
		const hash = '12345';
		await page.goto(astro.resolveUrl(`/user/${hash}/profile`));

		await expect(page.locator('h1')).toHaveText('Profile Page');
		await expect(page.locator('p')).toHaveText(`This is the profile page for the hash: ${hash}`);
	});

	test('should navigate to /login', async ({ page, astro }) => {
		await page.goto(astro.resolveUrl('/login'));

		await expect(page).toHaveURL(/\/login$/);
		await expect(page.locator('h1')).toHaveText('Login page');
	});

	test('should log in successfully', async ({ page, astro }) => {
		await page.goto(astro.resolveUrl('/login'));
		
		const loginForm = page.locator('#login-form');
		await waitForHydrate(page, loginForm);

		await loginForm.locator('input#username').fill('testuser');
		await loginForm.locator('input#password').fill('password123');
		await loginForm.locator('button[type="submit"]').click();

		await expect(loginForm.locator('input#username')).toHaveValue('');
		await expect(loginForm.locator('input#password')).toHaveValue('');
		await expect(loginForm.locator('#error-message')).not.toBeVisible();
	});
});
