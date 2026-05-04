describe('Page metadata', () => {
  const pages: [string, () => Promise<{ metadata?: { title?: unknown; description?: unknown } }>][] = [
    ['Home', () => import('../../src/app/page')],
    ['Who I Am', () => import('../../src/app/who-i-am/page')],
    ['Free For Charity', () => import('../../src/app/charity/page')],
    ['Fun', () => import('../../src/app/fun/page')],
    ['Quotes', () => import('../../src/app/quotes/page')],
    ['CISSP Guide', () => import('../../src/app/clarke-moyer-cissp-certification-passing-guide/page')],
  ]

  test.each(pages)('%s page exports metadata with title and description', async (name, importFn) => {
    const mod = await importFn()
    expect(mod.metadata).toBeDefined()
    expect(mod.metadata?.title).toBeTruthy()
    expect(mod.metadata?.description).toBeTruthy()
  })
})
