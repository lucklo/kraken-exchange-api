const endpointPath = require('../Clients/KrakenEndpoints').Assets
const PublicClient = require('../Clients/PublicClient')

class Assets {
  constructor () {
    this.client = new PublicClient()
  }

  getAssets (assets, callback) {
    let message = {} // I would put that into Promise constructor, so whenever you throw any error it will be catch but .catch function

    if (assets !== null) {
      if (!(assets instanceof Array) || assets.length === 0) { // use Array.isArray for checking if is Array or even safer use lodash.isArray
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
            return reject(response) // error first
          }
          resolve(response.body.result)
        }) // no catch
    }).then((response) => {
      if (typeof callback === 'function') {
        callback(response) // error first
      }

      return response
    }) // no catch
  }

  getAllAssets (callback) {
    return this.getAssets(null, callback)
  }

  getSingleAsset (asset, callback) {
    if (typeof asset !== 'string' || !asset) { // you should use safe lodash.isString
      throw new Error('Kraken:Assets: `asset` variable need to be a non-empty string')
    }

    return this.getAssets([asset], callback)
  }
}

module.exports = Assets
