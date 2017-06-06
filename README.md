# kraken-exchange-api


# Quick Start

## API Clients
### Public API Client
Kraken Exchange provide set of endpoints that don't require authentication
to get basic information about Market. See [`Public market data section at Kraken Docs`](https://www.kraken.com/help/api#public-market-data) 

### Authenticated API Client
To access Private API from Kraken you need to request ApiKey and ApiSecret from your Account Settings in Kraken Dashboard.


## Built-In Kraken API Objects
Every Object we created provide both `Promise` and `callback` support.

### Kraken.Time
#### getUnixTime()
```javascript
Kraken.Time.getUnixTime(/** optional **/ callback) 
```
* Arguments:
    * `callback` (optional)   
* Returns: `Promise`

#### getTimeinRfc1123()
```javascript
Kraken.Time.getTimeInRfc1123(/** optional **/ callback) 
```
Returns RFC1123 compilant timestamp string.

* Arguments:
    * `callback` (optional)   
* Returns: `Promise`

##### Example Usage:
```javascript
const KrakenTime = require('kraken-exchange-api').Time
const time = new KrakenTime

// Promise Based
time
  .getUnixTime()
  .then((unixTimeStamp) => {
    console.log(unixTimeStamp)
  })


// Callback Based
time
  .getUnixTime((unixTimeStamp) => {
    console.log(unixTimeStamp)
  })
```