const KRAKEN_API_ENDPOINT_URL = 'https://api.kraken.com'
const request = require('request')
const messageSignature = new require('./MessageSignature')

class AuthorizedClient {

  constructor({apiKey, apiSecret, otp}) {
    this.nonce = this.initializeNonce()
    this.apiKey = apiKey
    messageSignature.setSecret(apiSecret)
  }

  request(path, method, message) {
    const messageSignature = messageSignature.getSignature(path, message, this.nonce);
    const url = KRAKEN_API_ENDPOINT_URL + path
    const options = {
      headers: {
        'User-Agent': 'Kraken Node API Client',
        'API-Key': this.apiKey,
        'API-Secret': messageSignature
      },
      method: method
    }
  }

  initializeNonce() {
    return 1;
  }

}

module.exports = AuthorizedClient