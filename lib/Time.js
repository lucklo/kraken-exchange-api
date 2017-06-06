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
          console.log(response)
          if (response.statusCode != 200) {
           return reject(response)
          }
          resolve(response.body)

      })
    }).then(() => {

    })
  }

  getUnixTime(callback) {
    return this.getTime().then()
  }

  getTimeinRfc1123() {

  }

}

module.exports = Time