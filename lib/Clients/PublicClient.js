const KRAKEN_API_ENDPOINT_URL = 'https://api.kraken.com'
const request = require('request-promise')

class PublicClient {

  request(path, method, message) {
    const uri = KRAKEN_API_ENDPOINT_URL + path
    const options = {
      headers: {
        'User-Agent': 'Kraken Node API Client',
      },
      method: method,
      uri: uri,
      qs: message
    }

    return request(options)
  }

}

module.exports = PublicClient