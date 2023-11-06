import { test, expect } from '@playwright/test';

test('should navigate to main page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Tu marca aquí'
  );
});
