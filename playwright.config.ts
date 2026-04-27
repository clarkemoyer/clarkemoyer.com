import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  // Increase per-test timeout for CI to accommodate React 19 streaming
  timeout: process.env.CI ? 60000 : 30000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  // Increase assertion timeout: React 19 App Router streaming metadata may
  // take longer to set <title> in CI environments (GitHub Actions 2 vCPU)
  expect: {
    timeout: 15000,
  },
  projects: [{
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      // Required for CI environments (GitHub Actions) where sandbox is restricted
      launchOptions: {
        args: process.env.CI ? ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] : [],
      },
    },
  }],
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
})
