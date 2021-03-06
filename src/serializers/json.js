module.exports = {
  name: 'json',
  desc: 'uses JSON.stringify to build a string:\n\n--spaces, -S [number]\nThe number of spaces used to format JSON. If it is set to 0 (default), the JSON is printed in a single line.\n\n--keep, -K [string]\nDetermines which JSON fields are kept. If it is left out (default), all fields remain. If it is a string formatted as a JSON array, all fields in the array are kept. See the documentation of JSON.stringify for details.\n',
  func: ({spaces, S, keep, K}) => {
    const _spaces = spaces || S || 0
    const keepStr = keep   || K || null
    const _keep   = JSON.parse(keepStr) || null

    return jsons => {
      let str   = ''
      const err = []

      for (let index = 0; index < jsons.length; index++) {
        try {
          const obj = jsons[index]
          const foo = JSON.stringify(obj, _keep, _spaces)
          if (typeof foo !== 'undefined') str += foo + '\n'
        } catch (e) {
          const msg = {msg: e.message}
          err.push(msg)
        }
      }

      return {err, str}
    }
  }
}