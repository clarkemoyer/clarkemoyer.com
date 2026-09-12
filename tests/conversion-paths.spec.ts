import { test, expect } from '@playwright/test'

const paths = [
  {
    route: '/contact/',
    primary: 'Book a Walk and Talk',
    href: /^https:\/\/outlook\.office\.com\/bookwithme\//,
  },
  {
    route: '/psu-arl-referral/',
    primary: 'Connect with Clarke on LinkedIn',
    href: 'https://www.linkedin.com/in/clarkemoyer/',
  },
  {
    route: '/wgu-referral/',
    primary: 'Message Clarke on LinkedIn',
    href: 'https://www.linkedin.com/in/clarkemoyer/',
  },
  {
    route: '/certification/',
    primary: 'Browse the guides from the top',
    href: '#certification-guides',
  },
  { route: '/charity/', primary: 'Visit Free For Charity', href: 'https://freeforcharity.org' },
]

test.describe('conversion paths', () => {
  for (const conversion of paths) {
    test(`${conversion.route} exposes its contextual primary action`, async ({ page }) => {
      await page.goto(conversion.route)
      const primary = page.getByRole('link', { name: conversion.primary }).last()
      await expect(primary).toBeVisible()
      await expect(primary).toHaveAttribute('href', conversion.href)
    })
  }

  test('WGU and charity routes do not offer unrelated ARL jobs', async ({ page }) => {
    for (const route of ['/wgu-referral/', '/charity/']) {
      await page.goto(route)
      await expect(page.getByRole('link', { name: /Apply for Jobs at ARL/i })).toHaveCount(0)
    }
  })

  test('consented booking intent emits the documented event', async ({ page }) => {
    await page.goto('/contact/')
    await page.evaluate(() => {
      localStorage.setItem(
        'cookie-consent',
        JSON.stringify({ necessary: true, analytics: true, marketing: false })
      )
    })
    await page.reload()
    await page.evaluate(() => {
      const link = Array.from(document.querySelectorAll<HTMLAnchorElement>('a')).find((item) =>
        item.textContent?.includes('Book a Walk and Talk')
      )
      if (!link) throw new Error('Booking link not found')
      document.addEventListener('click', (event) => event.preventDefault(), {
        capture: true,
        once: true,
      })
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
    })

    await expect
      .poll(async () =>
        page.evaluate(() =>
          window.dataLayer?.some((item) => {
            const event = item as Record<string, unknown>
            return event.event === 'conversion_click' && event.conversion_action === 'open_booking'
          })
        )
      )
      .toBe(true)
  })

  test('audience landing pages fit a Pixel-sized viewport without horizontal overflow', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 412, height: 915 })
    for (const conversion of paths) {
      await page.goto(conversion.route)
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth
      )
      expect(overflow, `${conversion.route} overflows horizontally`).toBeLessThanOrEqual(1)
      await expect(page.getByRole('link', { name: conversion.primary }).last()).toBeVisible()
    }
  })
})
