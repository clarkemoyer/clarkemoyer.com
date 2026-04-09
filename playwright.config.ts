import { defineConfig, devices } from '@playwright/test'
import path from 'path'

// Quote path to handle spaces in directory names
const serveBin = `"${path.join('node_modules', '.bin', 'serve')}"`

export default defineConfig({
  testDir: './tests',
  fullyParallel: !process.env.CI,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    ...(process.env.CI ? { actionTimeout: 15000 } : {}),
  },
  projects: [{
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  }],
  webServer: {
    command: `${serveBin} out -p 3000 --no-clipboard`,
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
})
