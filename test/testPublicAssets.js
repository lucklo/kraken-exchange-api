const should = require('chai').should
const assert = require('chai').assert
const KrakenAssets = require('../lib/index').Assets

should()

describe('Kraken Assets Endpoint', function() {

  const krakenAssets = new KrakenAssets()

  it('should get all assets', function() {
    return krakenAssets.getAllAssets()
      .then(assets => {
        const assetsCount = Object.keys(assets).length
        return assetsCount.should.be.greaterThan(2)
      })
  })

  it('should get only get selected assets', function () {
    const selectedAssets = ['XBT', 'ETH']
    return krakenAssets.getAssets(selectedAssets)
      .then(assets => {
        const assetsCount = Object.keys(assets).length
        assetsCount.should.be.equal(selectedAssets.length)
      })
  })

  it('should get only one selected asset', function() {
    const selectedAsset = 'XBT'
    return krakenAssets.getSingleAsset(selectedAsset)
      .then(asset => {
        const assetsCount = Object.keys(asset).length
        assetsCount.should.be.equal(1)
      })
  })

  it('should fail when non-string assets keys are used', function() {
    const malformedAssetsArray = [1, {}, function() {}]
    assert.throws(() => {
      krakenAssets.getAssets(malformedAssetsArray)
    })
  })

  it('should fail to get single asset when empty string or malformed input is used', function() {
    assert.throws(() => {
      const emptyAssetId = ''
      krakenAssets.getAsset(emptyAssetId)
    })

    assert.throws(() => {
      const malformedAssetId = {'malformed': 'input'}
      krakenAssets.getAsset(malformedAssetId)
    })

  })

})