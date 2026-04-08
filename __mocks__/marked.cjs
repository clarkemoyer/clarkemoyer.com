// Mock for marked ESM module
const marked = {
  parse: (content) => `<p>${content}</p>`,
  setOptions: () => {},
  use: () => {},
}

module.exports = marked
module.exports.marked = marked
module.exports.parse = marked.parse
