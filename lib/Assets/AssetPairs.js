const endpointPath = require('../Clients/KrakenEndpoints').AssetPairs
const PublicClient = require('../Clients/PublicClient')

class AssetPairs {
  constructor () {
    this.client = new PublicClient()
  }

  getAssetPairs (assetPairs, callback) {
    let message = {}

    if (assetPairs !== null) {
      if (!(assetPairs instanceof Array) || assetPairs.length === 0) {
        throw new Error('Kraken:AssetPairs: `assetPairs` for non-null values need to be an array')
      }

      assetPairs.forEach((assetPair) => {
        if (typeof assetPair !== 'string' || !assetPair) {
          throw new Error('Kraken:AssetPairs: every `assetPair` in array need to be a non-empty string')
        }
      })

      message.pair = assetPairs.join(',')
    }

    return new Promise((resolve, reject) => {
      const request = this.client.get(endpointPath, message)
      request
        .then((response) => {
          if (response.statusCode !== 200) {
            return reject(response)
          }
          resolve(response.body.result)
        })
    }).then((response) => {
      if (typeof callback === 'function') {
        callback(response)
      }

      return response
    })
  }

  getAllAssetPairs (callback) {
    return this.getAssetPairs(null, callback)
  }

  getAssetPair (assetPair, callback) {
    if (typeof assetPair !== 'string' || !assetPair) {
      throw new Error('Kraken:AssetPairs: `assetPair` variable need to be a non-empty string')
    }

    return this.getAssetPairs([assetPair], callback)
  }
}

module.exports = AssetPairs
