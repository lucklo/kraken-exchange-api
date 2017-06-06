const assert = require('assert')
const should = require('chai').should
should()

const KrakenTime = require('../lib/index').Time

describe('Kraken Connectivity', function () {
  describe('Kraken Time connectivity', function() {
    it('should send valid time', function() {
      const allowedTimeDiscrepancy = 3600 // An hour
      const localUnixTimeStamp = Math.floor(new Date() / 1000)
      const referenceTimestamp = localUnixTimeStamp - allowedTimeDiscrepancy

      const krakenTime = new KrakenTime()
      krakenTime.getUnixTime().then((unixTime) => {
        console.log(unixTime)
        unixTime.should.be.greaterThan(referenceTimestamp)
      }).catch(() => {
        throw new Error('it failed to respond with unix timestamp')
      })

    })
  })
})