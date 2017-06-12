# kraken-exchange-api
[![Build Status](https://travis-ci.org/lucklo/kraken-exchange-api.svg?branch=master)](https://travis-ci.org/lucklo/kraken-exchange-api)
# Quick Start

## Status
This project is still in very early development and some major functionality is probably missing.
All documented endpoints and objects should be usable though.

If you like to contribute feel free to contact author of this repo or push `Pull Request` with changes.


## Installation
Please install this package using `npm`
kraken-exchange-node-api
```bash
npm install kraken-exchange-node-api
```

## Requirements
This library was written in ES2015 code. We highly recommenda any version of Node.js greater than 7.


## API Clients
API Clients provide simple way to use Kraken API directly without need to use Classes that we provided.

### Public API Client
Kraken Exchange provide set of endpoints that don't require authentication
to get basic information about Market. See [`Public market data section at Kraken Docs`](https://www.kraken.com/help/api#public-market-data) 

### Authenticated API Client
To access Private API from Kraken you need to request ApiKey and ApiSecret from your Account Settings in Kraken Dashboard.


## Built-In Kraken API Support
Every Class we created provide both `Promise` and `callback` interface.

### Kraken.Time
#### getUnixTime()
```javascript
Kraken.Time.getUnixTime(/** optional **/ callback) 
```
* Arguments:
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: `integer`
#### getTimeinRfc1123()
```javascript
Kraken.Time.getTimeInRfc1123(/** optional **/ callback) 
```
Returns RFC1123 compilant timestamp string.

* Arguments:
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: `string`

##### Example Usage:
```javascript
const Kraken = require('kraken-exchange-node-api')
const time = new Kraken.Time()

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

### Kraken.Assets
#### getAssets()
```javascript
Kraken.Assets.getAsset(assets, /** optional **/ callback) 
```
Returns specified assets information.

* Arguments:
    * `assets` (required) - Array of assets i.e `['XBT', 'ETH']`
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: `Array` of Assets

#### getAsset()
```javascript
Kraken.Assets.getSingleAsset(asset, /** optional **/ callback) 
```
Returns single specific asset information.

* Arguments:
    * `asset` (required)    - Asset identifier i.e. `XBT`
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: `Object` of Asset
    
#### getAllAssets()
```javascript
Kraken.Assets.getAllAssets(/** optional **/ callback) 
```
Returns information about all assets

* Arguments:
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: `Array` of Assets
    
### Kraken.AssetPairs
#### getAssetPairs()
```javascript
Kraken.AssetPairs.getAssetPairs(assetPairs, /** optional **/ callback) 
```
Returns information about specified asset pairs

* Arguments:
    * `assetPairs` (required) - Array of asset pairs i.e `[XBTEUR', 'XBTUSD']`
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: `Array` of Assets Pairs

#### getSingleAssetPair()
```javascript
Kraken.AssetPairs.getSingleAssetPair(assetPair, /** optional **/ callback) 
```
Returns single specific asset pair information.

* Arguments:
    * `assetPair` (required)    - Asset pair identifier i.e. `XBTEUR`
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: `Object` of Asset Pair
    
#### getAllAssetPairs()
```javascript
Kraken.AssetPairs.getAllAssetPairs(/** optional **/ callback) 
```
Returns information about all asset pairs 

* Arguments:
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: `Array` of Asset Pairs
    

### Kraken.Ticker
Provides interface to retrieve Ticker information about given Asset Pairs.

##### Example Usage:
```javascript
const ticker = new Kraken.Ticker()
const parts = Kraken.TickerParts

ticker.getSinglePairTicker('XBTEUR')
   .then((ticker) => {	 
     const [volumeWeightedAveragePriceLast24h, volumeLast24h] = ticker.getParts([parts.VolumeWeightedAveragePriceLast24h, parts.VolumeLast24h])
     const spread = ticker.getAskPrice() - ticker.getBidPrice()
     console.log(ticker.getPairName(), spread, volumeWeightedAveragePriceLast24h, volumeLast24h)
   })
```

#### getPairsTickers()
```javascript
Kraken.Ticker.getPairsTickers(assetPairs, /** optional **/ callback) 
```
Returns ticker information about specified asset pairs

* Arguments:
    * `assetPairs` (required) - Array of asset pairs i.e `[XBTEUR', 'XBTUSD']`
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: `Array` of [`TickerInfo`](#tickerinfo) Objects for selected Pairs

#### getSinglePairTicker()
```javascript
Kraken.Ticker.getSinglePairTicker(assetPair, /** optional **/ callback) 
```
Returns ticker info of single specific asset pair

* Arguments:
    * `assetPair` (required)    - Asset pair identifier i.e. `XBTEUR`
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: [`TickerInfo`](#tickerinfo) Object
    
## Info Objects
### TickerInfo
Class that encapsulate data for single Ticker. It's useful for retrieving specific information about Ticker in easy & readable way.

#### TickerInfo.getAskPrice()
```javascript
TickerInfo.getAskPrice() 
````
Returns Ask Price of Ticker i.e `2487.55089`

* Returns: `float`

#### TickerInfo.getBidPrice()
```javascript
TickerInfo.getBidPrice() 
```
Returns Bid Price of Ticker i.e. `2487.55089`
* Returns: `float`

#### TickerInfo.getPairName()
```javascript
TickerInfo.getBidPrice() 
```
Returns pair name of Ticker object i.e. `XXBTZEUR`

* Returns: `string`
#### TickerInfo.getPart(part)
```javascript
TickerInfo.getPart(/** required **/ part)
```
Returns selected part of ticker. Keep in mind that floats values (i.e. prices) won't be casted to `float` type.

* Arguments:
    * `part` (required) - Array of ticker parts (see. [`TickerParts`](#tickerparts))
* Returns: `string|int`

#### TickerInfo.getParts()
```javascript
TickerInfo.getParts(/** required **/ partsArray) 
```
Returns selected parts of ticker. Order is being kept as in input params

* Arguments:
    * `partsArray` (required) - Array of ticker parts (see. [`TickerParts`](#tickerparts))
* Returns: `Array` with values of selected Ticker parts

#### TickerInfo.getRawData()
```javascript
TickerInfo.getRawData() 
```
Returns raw response from Kraken API in form of Object

* Returns: `Object`

## Object Parts (Dictionaries)
### TickerParts
Provides parts available in TickerInfo that are provided by Kraken API.
Following `parts` are supported:

* AskPrice
* AskWholeLotVolume
* AskLotVolume
* BidPrice
* BidWholeLotVolume
* BidLotVolume
* ClosePrice
* CloseLotVolume
* VolumeToday
* VolumeLast24h
* VolumeWeightedAveragePriceToday
* VolumeWeightedAveragePriceLast24h
* TradesToday
* TradesLast24h
* LowPriceToday
* LowPriceLast24h
* HighPriceToday
* HighPriceLast24h
* OpenPrice

