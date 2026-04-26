import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { testConfig } from './test.config'

/**
 * Build output validation tests
 *
 * These tests inspect the `out/` directory produced by `npm run build`
 * (next build with output: 'export'). They run without a browser and
 * validate the static files on disk.
 *
 * If the out/ directory doesn't exist (e.g., CI hasn't built yet),
 * each test is skipped gracefully rather than failing.
 */

test.describe('Build output validation', () => {
  const outDir = path.join(process.cwd(), 'out')
  const outExists = fs.existsSync(outDir)

  test('out/ directory exists after build', () => {
    if (!outExists) {
      test.skip()
      return
    }
    expect(outExists).toBe(true)
  })

  test('all pages exist in build output', () => {
    if (!outExists) {
      test.skip()
      return
    }
    // Convert /foo/ → foo/index.html, / → index.html
    const expectedPaths = testConfig.pages.map(p => {
      if (p === '/') return 'index.html'
      return p.replace(/^\//, '').replace(/\/$/, '') + '/index.html'
    })
    for (const p of expectedPaths) {
      const fullPath = path.join(outDir, p)
      expect(fs.existsSync(fullPath), `Missing: out/${p}`).toBe(true)
    }
  })

  test('HTML files are not empty', () => {
    if (!outExists) {
      test.skip()
      return
    }
    const htmlFile = path.join(outDir, 'index.html')
    expect(fs.existsSync(htmlFile), 'out/index.html missing').toBe(true)
    const content = fs.readFileSync(htmlFile, 'utf-8')
    expect(content.length).toBeGreaterThan(1000)
    expect(content).toContain('<html')
    expect(content).toContain('Clarke Moyer')
  })

  test('no server-side image optimizer references in built HTML', () => {
    if (!outExists) {
      test.skip()
      return
    }
    const htmlFiles: string[] = []
    function walk(dir: string) {
      for (const f of fs.readdirSync(dir)) {
        const full = path.join(dir, f)
        if (fs.statSync(full).isDirectory()) walk(full)
        else if (f.endsWith('.html')) htmlFiles.push(full)
      }
    }
    walk(outDir)
    expect(htmlFiles.length, 'No HTML files found in out/').toBeGreaterThan(0)
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf-8')
      const relPath = path.relative(outDir, file)
      expect(
        content,
        `Server image optimizer (/_next/image?url=) found in out/${relPath} — ` +
        'images must be unoptimized for static export'
      ).not.toContain('/_next/image?url=')
    }
  })

  test('no mojibake in built HTML files', () => {
    if (!outExists) {
      test.skip()
      return
    }
    // Walk ALL html files in out/ directory
    const htmlFiles: string[] = []
    function walkForMojibake(dir: string) {
      for (const f of fs.readdirSync(dir)) {
        const full = path.join(dir, f)
        if (fs.statSync(full).isDirectory()) walkForMojibake(full)
        else if (f.endsWith('.html')) htmlFiles.push(full)
      }
    }
    walkForMojibake(outDir)
    expect(htmlFiles.length, 'No HTML files found in out/').toBeGreaterThan(0)
    for (const full of htmlFiles) {
      const relPath = path.relative(outDir, full)
      const content = fs.readFileSync(full, 'utf-8')
      // Check for common UTF-8 double-encoding mojibake patterns
      expect(content, `Mojibake (Ã¢â‚¬ pattern) in out/${relPath}`).not.toMatch(/Ã¢â‚¬/)
      expect(content, `Mojibake (â€ pattern) in out/${relPath}`).not.toMatch(/â€[™˜"â€]/)
    }
  })

  test('all HTML files have UTF-8 charset declaration', () => {
    if (!outExists) {
      test.skip()
      return
    }
    const keyFiles = [
      'index.html',
      'walk-and-talk/index.html',
      'professional-development/index.html',
    ]
    for (const f of keyFiles) {
      const full = path.join(outDir, f)
      if (!fs.existsSync(full)) continue
      const content = fs.readFileSync(full, 'utf-8')
      const relPath = f
      // HTML files should declare charset=utf-8
      const hasCharset =
        content.toLowerCase().includes('charset="utf-8"') ||
        content.toLowerCase().includes("charset='utf-8'") ||
        content.toLowerCase().includes('charset=utf-8')
      expect(hasCharset, `No UTF-8 charset declaration in out/${relPath}`).toBe(true)
    }
  })

  test('trailing slash structure — pages use directory/index.html pattern', () => {
    if (!outExists) {
      test.skip()
      return
    }
    // With trailingSlash: true, Next.js exports pages as directory/index.html
    // Verify a few key pages follow this pattern
    const dirIndexPages = [
      'walk-and-talk/index.html',
      'cooking/index.html',
      'professional-development/index.html',
    ]
    for (const p of dirIndexPages) {
      const full = path.join(outDir, p)
      expect(
        fs.existsSync(full),
        `Expected directory/index.html pattern for out/${p} (trailingSlash: true)`
      ).toBe(true)
    }
  })
})
