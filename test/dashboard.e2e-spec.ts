import { expect, test } from '@playwright/test';

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(page.getByText('120', { exact: true })).toBeVisible()
  expect(page.getByText('-23% em relação ao mês passado')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(page.getByText('12', { exact: true })).toBeVisible()
  expect(page.getByText('-12% em relação ao mês passado')).toBeVisible()
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(page.getByText('R$ 1.273,39')).toBeVisible()
  expect(page.getByText('+123% em relação ao mês')).toBeVisible()
})
