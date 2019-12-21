module.exports = {
  name: 'jsonSingle',
  desc: 'parses each token into JSON individually.',
  func: ({verbose}) => (tokens, lines) => {
    const jsons = []
    const err   = []
  
    for (let index = 0; index < tokens.length; index++) {
      const token = tokens[index]
  
      try {
        const obj = JSON.parse(token)
        jsons.push(obj)
      } catch (e) {
        const line = verbose > 0 ? '(Line ' + lines[index] + ') ' : ''
        const info = verbose > 1 ? ' while parsing:\n' + token    : ''
        err.push(line + e + info)
      }
    }
  
    return {err, jsons}
  }
}