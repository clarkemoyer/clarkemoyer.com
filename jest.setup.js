import '@testing-library/jest-dom'
import 'jest-axe/extend-expect'

// Suppress only the specific Next.js Link act() warning that is a known false positive
// See: https://github.com/vercel/next.js/issues/47738
const originalError = console.error.bind(console)
console.error = (...args) => {
  const msg = args.map(String).join(' ')
  // Only suppress this specific Next.js internal warning
  if (
    msg.includes('ForwardRef(LinkComponent)') &&
    msg.includes('act(') &&
    msg.includes('update to the React state')
  ) {
    return
  }
  originalError(...args)
}
