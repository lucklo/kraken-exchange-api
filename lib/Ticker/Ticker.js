const forEach = require('lodash.foreach')
const PublicClient = require('../Clients/PublicClient')
const endpointPath = require('../Clients/KrakenEndpoints').Ticker
const TickerInfo = require('./TickerInfo')

function createTickerCollection (rawResponse) {
  let collection = [];
  forEach(rawResponse, (rawTickerData, tickerPair) => {
    collection.push(new TickerInfo(rawTickerData, tickerPair))
  })
  return collection
}

class Ticker {
  constructor () {
    this.client = new PublicClient()
  }

  getPairsTickers (assetPairs, callback) {
    let message = {}

    if (assetPairs !== null) {
      if (!(assetPairs instanceof Array) || assetPairs.length === 0) {
        throw new Error('Kraken:Assets: `assetPairs` for non-null values need to be an array')
      }

      assetPairs.forEach((assetPair) => {
        if (typeof assetPair !== 'string' || !assetPair) {
          throw new Error('Kraken:Ticker: every `assetPair` in array need to be a non-empty string')
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
          const tickerCollection = createTickerCollection(response.body.result)
          resolve(tickerCollection)
        })
    }).then((response) => {
      if (typeof callback === 'function') {
        callback(response)
      }

      return response
    })
  }

  getSinglePairTicker (assetPair, callback) {
    if (typeof assetPair !== 'string' || !assetPair) {
      throw new Error('Kraken:Ticker: `assetPair` variable need to be a non-empty string')
    }

    return this.getPairsTickers([assetPair], callback)
      .then(collection => collection[0])
  }


}

module.exports = Ticker
