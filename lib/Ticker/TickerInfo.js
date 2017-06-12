const get = require('lodash.get')
const includes = require('lodash.includes')
const TickerParts = require('./TickerParts')

class TickerInfo {
  constructor(rawTickerInfo, tickerPair) {
    this.rawTickerInfo = rawTickerInfo
    this.tickerPair = tickerPair
  }

  getAskPrice() {
    return parseFloat(this.getPart(TickerParts.AskPrice))
  }

  getBidPrice() {
    return parseFloat(this.getPart(TickerParts.BidPrice))
  }

  getPairName() {
    return this.tickerPair
  }

  getRawData() {
    return {
      [this.tickerPair]: this.rawTickerInfo
    }
  }

  getParts(parts) {
    let partsData = []
    if (!parts || !Array.isArray(parts)) {
      throw new Error('`parts` argument need to be an non-empty array')
    }

    parts.forEach(part => {
      if (!includes(TickerParts, part)) {
        throw new Error('Value `'+ part + '` is not supported by TickerInfo')
      }

      const partValue = get(this.rawTickerInfo, part)
      partsData.push(partValue)
    })

    return partsData
  }

  getPart(part) {
    return this.getParts([part])[0]
  }

}

module.exports = TickerInfo