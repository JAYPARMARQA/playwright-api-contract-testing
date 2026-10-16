import { test, expect } from '@playwright/test';

test('GET /users returns a stable user contract', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.data).toMatchObject({ id: 2, email: expect.stringContaining('@') });
});
