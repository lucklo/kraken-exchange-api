const should = require('chai').should
const KrakenTime = require('../lib/index').Time
const nockTime = require('./nock/nockPublicEndpointsMocks')

should()

describe('Kraken Connectivity', function () {
  describe('Kraken Time connectivity', function() {
    it('should send valid time', function() {
      const allowedTimeDiscrepancy = 3600 // An hour
      const localUnixTimeStamp = Math.floor(new Date() / 1000)
      const referenceTimestamp = localUnixTimeStamp - allowedTimeDiscrepancy
      const krakenTime = new KrakenTime()

      return krakenTime.getUnixTime()
        .then((unixTime) => {
          unixTime
            .should.be.greaterThan(referenceTimestamp)
        }).catch(() => {
          throw new Error('it failed to respond with unix timestamp')
        })
    })
  })
})