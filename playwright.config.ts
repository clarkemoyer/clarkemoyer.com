import { defineConfig, devices } from '@playwright/test'
import path from 'path'

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    // Give each action more time in CI
    actionTimeout: process.env.CI ? 15000 : 5000,
  },
  projects: [{
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  }],
  webServer: {
    // Use the locally installed serve binary directly (avoids npx startup overhead)
    command: `${path.join('node_modules', '.bin', 'serve')} out -p 3000 --no-clipboard`,
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
})
