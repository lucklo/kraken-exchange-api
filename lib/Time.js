const PublicClient = require('./Clients/PublicClient')
const endpointPath = require('./Clients/KrakenEndpoints').Time

class Time {

  constructor() {
    this.client = new PublicClient
  }

  getTime(callback) {
    return new Promise((resolve, reject) => {
      const request = this.client.request(endpointPath, 'get')

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

  getUnixTime(callback) {
    return this.getTime()
      .then((response) => {
        const unixTime = response['unixtime']
        if (typeof callback === 'function') {
          callback(unixTime)
        }
        return unixTime
      })
  }

  getTimeInRfc1123(callback) {
    return this.getTime()
      .then((response) => {
        const unixTime = response['rfc1123']
        if (typeof callback === 'function') {
          callback(unixTime)
        }
        return unixTime
      })
  }

}

module.exports = Time