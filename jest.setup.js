import '@testing-library/jest-dom'
import 'jest-axe/extend-expect'

const originalError = console.error.bind(console)
console.error = (...args) => {
  const msg = args.map(String).join(' ')
  if (msg.includes('ForwardRef(LinkComponent)') && msg.includes('act(')) return
  originalError(...args)
}
