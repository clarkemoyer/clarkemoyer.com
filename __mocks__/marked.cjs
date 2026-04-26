// Mock for marked ESM module
function Renderer() {}
Renderer.prototype.link = null;

const marked = {
  parse: (content) => `<p>${content}</p>`,
  setOptions: () => {},
  use: () => {},
}

module.exports = marked
module.exports.marked = marked
module.exports.parse = marked.parse
module.exports.Renderer = Renderer
