const should = require('chai').should
const assert = require('chai').assert
const Kraken = require('../lib/index')
const TickerInfo = require('../lib/Ticker/TickerInfo')
const TickerParts = Kraken.TickerParts

should()

describe('Ticker', function() {

  const ticker = new Kraken.Ticker()

  it('should return selected assets pairs', function() {
    const selectedAssetPairs = ['XBTEUR', 'XBTUSD', 'ETHEUR']
    return ticker.getPairsTickers(selectedAssetPairs)
      .then((tickers) => {
        tickers.should.to.be.an('array').that.is.not.empty
        tickers.length.should.be.equal(selectedAssetPairs.length)
      })
  })

  it('should return single selected asset pair', function() {
    const selectedAssetPair = 'XBTEUR'
    return ticker.getSinglePairTicker(selectedAssetPair)
      .then((tickerInfo) => {
        assert(tickerInfo instanceof TickerInfo)
        tickerInfo.getBidPrice()
          .should.be.greaterThan(0)
        tickerInfo.getAskPrice()
          .should.be.greaterThan(0)
        tickerInfo.getPairName()
          .should.be.an('string').that.is.not.empty

        tickerInfo.getPart(TickerParts.VolumeWeightedAveragePriceToday)
          .should.be.not.empty

        tickerInfo.getRawData().should.be.an('object')

      })
  })

})