const endpointPath = require('../Clients/KrakenEndpoints').Assets
const PublicClient = require('../Clients/PublicClient')

class Assets {
  constructor () {
    this.client = new PublicClient()
  }

  getAssets (assets, callback) {
    let message = {}

    if (assets !== null) {
      if (!(assets instanceof Array) || assets.length === 0) {
        throw new Error('Kraken:Assets: `assets` for non-null values need to be an array')
      }

      assets.forEach((asset) => {
        if (typeof asset !== 'string' || !asset) {
          throw new Error('Kraken:Assets: every `asset` in array need to be a non-empty string')
        }
      })

      message.asset = assets.join(',')
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

  getAllAssets (callback) {
    return this.getAssets(null, callback)
  }

  getAsset (asset, callback) {
    if (typeof asset !== 'string' || !asset) {
      throw new Error('Kraken:Assets: `asset` variable need to be a non-empty string')
    }

    return this.getAssets([asset], callback)
  }
}

module.exports = Assets
