const should = require('chai').should
const Ticker = require('../lib/index').Ticker

should()

describe('Ticker', function() {

  const ticker = new Ticker()

  it('should return selected assets pairs', function() {
    const selectedAssetPairs = ['XBTEUR', 'XBTUSD', 'ETHEUR']
    return ticker.getPairsTickers(selectedAssetPairs)
      .then((rawTickersInfo) => {
        const tickers = Object.keys(rawTickersInfo)
        tickers.should.to.be.an('array').that.is.not.empty
        tickers.length.should.be.equal(selectedAssetPairs.length)
      })
  })

  it('should return single selected asset pair', function() {
    const selectedAssetPair = 'XBTEUR'
    return ticker.getSinglePairTicker(selectedAssetPair)
      .then((rawAssetPairs) => {
        const tickers = Object.keys(rawAssetPairs)
        tickers.should.to.be.an('array').that.is.not.empty
        tickers.length.should.be.equal(1)
      })
  })

})