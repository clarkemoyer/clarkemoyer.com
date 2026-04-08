import { defineConfig, devices } from '@playwright/test'
import { execFileSync } from 'child_process'

function findChromium(): string | undefined {
  for (const name of ['chromium', 'chromium-browser', 'google-chrome', 'google-chrome-stable']) {
    try {
      const p = execFileSync('which', [name], { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }).trim()
      if (p) return p
    } catch {
      /* try next */
    }
  }
  return undefined
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: { executablePath: findChromium() },
      },
    },
  ],
  webServer: {
    command: 'npx serve out -p 3000',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
})
