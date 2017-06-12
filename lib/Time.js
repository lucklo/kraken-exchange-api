const PublicClient = require('./Clients/PublicClient')
const endpointPath = require('./Clients/KrakenEndpoints').Time

class Time {
  constructor () {
    this.client = new PublicClient()
  }

  getTime (callback) {
    return new Promise((resolve, reject) => {
      const request = this.client.get(endpointPath)

      request
        .then((response) => {
          if (response.statusCode !== 200) {
            return reject(response)
          }
          resolve(response.body.result)
        }) // where do you catch error?
    }).then((response) => { // dont get it, why do you return Promise not yet fullfiled and also you handle it after resolve?
      if (typeof callback === 'function') {
        callback(null, response) // it should be error first
      }

      return response
    }) // same here, where do you catch erros?
      .catch((err)=>{
        callback(err)
      })
  }

  getUnixTime (callback) {
    return this.getTime()
      .then((response) => {
        const unixTime = response['unixtime']
        if (typeof callback === 'function') {
          callback(unixTime)
        }
        return unixTime
      })
  }

  getTimeInRfc1123 (callback) {
    return this.getTime()
      .then((response) => {
        const unixTime = response['rfc1123']
        if (typeof callback === 'function') { // I would add new function to handle if callback is provided then execute it...
          callback(unixTime)
        }
        return unixTime
      })
  }
}

module.exports = Time
