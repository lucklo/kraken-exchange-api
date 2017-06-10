const crypto = require('crypto')
const queryString = require('querystring')

class MessageSignature {
  setSecret (secret) {
    if (!secret || typeof secret !== 'string') {
      throw new Error('Secret need to be a non-empty string')
    }
    this.secret = new Buffer(secret, 'base64')
  }

  getSignature (path, request, nonce) {
    if (!this.secret) {
      throw new Error('MessageSignature secret need to be provided for message to be signed')
    }

    const message	= queryString.stringify(request)
    let hash	= new crypto.createHash('sha256')
    let hmac = new crypto.createHmac('sha512', this.secret)
    const hashDigest	= hash.update(nonce + message).digest('binary')
    const hmacDigest = hmac.update(path + hashDigest, 'binary').digest('base64')

    return hmacDigest
  }
}

module.exports = MessageSignature
