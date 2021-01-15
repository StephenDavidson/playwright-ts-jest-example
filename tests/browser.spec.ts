import { HomePage } from './home.page'

beforeAll(async () => {
  await page.goto('https://whatismybrowser.com/')
})

test('should display "google" text on page', async () => {
  await expect(page).toHaveText(HomePage.selectors.browserName, 'Chrome')
})