import { prepack } from 'prepack'


class PurgeFromJs {
  static extract(content) {
    const prepackedCode = prepack(content, { singlePass: true }).code
    return prepackedCode.match(/[A-Za-z0-9_-]+/g) || []
  }
}

export default PurgeFromJs