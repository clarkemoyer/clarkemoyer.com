describe('Page metadata', () => {
  const pages = [
    ['Home', () => import('../../src/app/page')],
    ['Who I Am', () => import('../../src/app/who-i-am/page')],
    ['Free For Charity', () => import('../../src/app/free-for-charity/page')],
    ['Fun', () => import('../../src/app/fun/page')],
    ['Cookie Policy', () => import('../../src/app/cookie-policy/page')],
    ['Privacy Policy', () => import('../../src/app/privacy-policy/page')],
  ] as const

  test.each(pages)(
    '%s page exports metadata with title and description',
    async (name, importFn) => {
      const mod = await importFn()
      expect(mod.metadata).toBeDefined()
      expect(mod.metadata.title).toBeTruthy()
      expect(mod.metadata.description).toBeTruthy()
    }
  )
})
