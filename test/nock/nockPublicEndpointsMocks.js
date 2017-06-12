const fs = require('fs')
const nock = require('nock');
const krakenEndpoints = require('../../lib/Clients/KrakenEndpoints')
const KRAKEN_API_ENDPOINT_URL = 'https://api.kraken.com'


function readJsonResponse (responseFileName) {
  const path = __dirname + '/responses/' + responseFileName
  return JSON.parse(fs.readFileSync(path))
}

/**
 * Time Endpoint HTTP Mocks
 */

const timeResponseBody = {
  error: [],
  result: {
    unixtime: Math.floor(new Date() / 1000),
    rfc1123: "Sat, 10 Jun 17 19:43:58 +0000"
  }
}

const nockTime = nock(KRAKEN_API_ENDPOINT_URL)
  .get(krakenEndpoints.Time)
  .reply(200, timeResponseBody)


/**
 * Assets Endpoint HTTP Mocks
 */

const assetsResponses = {
  all: readJsonResponse('assetsAll.json'),
  few: readJsonResponse('assetsFew.json'),
  single: readJsonResponse('assetsSingle.json')
}


const nockAssets =   nock(KRAKEN_API_ENDPOINT_URL)
  .get(krakenEndpoints.Assets)
  .reply(200, assetsResponses.all)
  .get(krakenEndpoints.Assets + "?asset=XBT%2CETH")
  .reply(200, assetsResponses.few)
  .get(krakenEndpoints.Assets + "?asset=XBT")
  .reply(200, assetsResponses.single)


/**
 * Assets Pairs Endpoint HTTP Mocks
 */

const assetPairsResponses = {
  all: readJsonResponse('assetPairsAll.json'),
  few: readJsonResponse('assetPairsFew.json'),
  single: readJsonResponse('assetPairsSingle.json')
}


const nockAssetPairs = nock(KRAKEN_API_ENDPOINT_URL)
  .get(krakenEndpoints.AssetPairs)
  .reply(200, assetPairsResponses.all)
  .get(krakenEndpoints.AssetPairs + "?pair=XBTEUR%2CXBTUSD%2CETHEUR")
  .reply(200, assetPairsResponses.few)
  .get(krakenEndpoints.AssetPairs + "?pair=XBTEUR")
  .reply(200, assetPairsResponses.single)


/**
 * Ticker Endpoint HTTP Mocks
 */

const tickerResponses = {
  few: readJsonResponse('tickerFew.json'),
  single: readJsonResponse('tickerSingle.json')
}

const nockTicker = nock(KRAKEN_API_ENDPOINT_URL)
  .get(krakenEndpoints.Ticker + '?pair=XBTEUR%2CXBTUSD%2CETHEUR')
  .reply(200, tickerResponses.few)
  .get(krakenEndpoints.Ticker + '?pair=XBTEUR')
  .reply(200, tickerResponses.single)
