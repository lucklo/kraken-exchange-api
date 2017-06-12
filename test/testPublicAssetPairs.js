const should = require('chai').should
const AssetPairs = require('../lib/index').AssetPairs

should()

describe('AssetPairs', function() {

  const assetsPairs = new AssetPairs()

  it('should return multiple assets pairs', function() {
      return assetsPairs.getAllAssetPairs()
        .then((rawAssetPairs) => {
          const assetPairs = Object.keys(rawAssetPairs)
          assetPairs.should.to.be.an('array').that.is.not.empty;
          assetPairs.length.should.be.greaterThan(1)
        })
  })

  it('should return selected assets pairs', function() {
    const selectedAssetPairs = ['XBTEUR', 'XBTUSD', 'ETHEUR']
    return assetsPairs.getAssetPairs(selectedAssetPairs)
      .then((rawAssetPairs) => {
        const assetPairs = Object.keys(rawAssetPairs)
        assetPairs.should.to.be.an('array').that.is.not.empty
        assetPairs.length.should.be.equal(selectedAssetPairs.length)
      })
  })

  it('should return single selected asset pair', function() {
    const selectedAssetPair = 'XBTEUR'
    return assetsPairs.getSingleAssetPair(selectedAssetPair)
      .then((rawAssetPairs) => {
        const assetPairs = Object.keys(rawAssetPairs)
        assetPairs.should.to.be.an('array').that.is.not.empty
        assetPairs.length.should.be.equal(1)
      })
  })

})
