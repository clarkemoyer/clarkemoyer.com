import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Smoke Tests
 * Verifies all pages return HTTP 200 and have a non-empty <title> containing
 * "Clarke Moyer". Tests run against the live dev/preview server.
 */

const certPages = [
  '/clarke-moyer-cissp-certification-passing-guide/',
  '/clarke-moyer-cissp-issep-certification-passing-guide/',
  '/clarke-moyer-ciw-professional-passing-guide/',
  '/clarke-moyer-comptia-a-plus-passing-guide/',
  '/clarke-moyer-comptia-network-plus-passing-guide/',
  '/clarke-moyer-comptia-project-plus-passing-guide/',
  '/clarke-moyer-comptia-security-plus-passing-guide/',
  '/clarke-moyer-itil-4-foundation-passing-guide/',
  '/clarke-moyer-mcp-passing-guide/',
  '/clarke-moyer-microsoft-ai-900-passing-guide/',
  '/clarke-moyer-microsoft-az-500-passing-guide/',
  '/clarke-moyer-microsoft-az-900-passing-guide/',
  '/clarke-moyer-microsoft-ms-900-passing-guide/',
  '/clarke-moyer-microsoft-sc-500-passing-guide/',
  '/clarke-moyer-microsoft-sc-900-passing-guide/',
  '/clarke-moyer-pmp-certification-passing-guide/',
  '/clarke-moyer-safe-spc-certification-passing-guide/',
  '/clarke-moyer-vcp4-dcv-passing-guide/',
  '/clarke-moyer-vcp5-dcv-passing-guide/',
  '/clarke-moyer-vcp6-cma-passing-guide/',
  '/clarke-moyer-vcp-am-passing-guide/',
]

const allPages = [...new Set([...testConfig.pages, ...certPages])]

test.describe('Smoke — HTTP 200 for all pages', () => {
  for (const path of allPages) {
    test(`${path} returns 200`, async ({ page }) => {
      const response = await page.goto(path)
      expect(response, `${path} response should not be null`).not.toBeNull()
      expect(response!.status(), `${path} should return 200`).toBe(200)
    })
  }
})

test.describe('Smoke — page titles', () => {
  for (const path of allPages) {
    test(`${path} has a title containing "Clarke Moyer"`, async ({ page }) => {
      // Navigate and wait for network to be completely idle
      // (ensures React 19 streaming JS has fully loaded and executed)
      await page.goto(path, { waitUntil: 'networkidle' })
      // Force a small delay to allow React's scheduler to flush pending work
      // (React 19 defers title hydration via its scheduler, not network activity)
      await page.waitForTimeout(process.env.CI ? 2000 : 500)
      // Use toHaveTitle which retries automatically until title is set
      await expect(page).toHaveTitle(/Clarke Moyer/i)
    })
  }
})
