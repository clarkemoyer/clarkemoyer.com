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
      await page.goto(path)
      // Wait for all network requests to complete (JS bundles loaded)
      // before checking title. React 19 App Router sets title async.
      await page.waitForLoadState('networkidle')
      // Use toHaveTitle which retries automatically until title is set.
      // React 19 App Router manages <title> via streaming metadata which
      // may take longer in CI environments (2 vCPU GitHub Actions runners).
      // The timeout is set globally in playwright.config.ts expect.timeout.
      await expect(page).toHaveTitle(/Clarke Moyer/i)
    })
  }
})
