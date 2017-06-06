/**
 * Ticker Ask Info: Key
 *
 * @type {string}
 */
const Ask = 'a'

/**
 * Ticker Ask Info: Price
 *
 * @type {{key: string, index: number}}
 */
const AskPrice = { key: Ask, index: 0 }

/**
 * Ticker Ask Info: Whole Lot Volume
 *
 * @type {{key: string, index: number}}
 */
const AskWholeLotVolume = { key: Ask, index: 1 }

/**
 * Ticker Ask Info: Lot Volume
 *
 * @type {{key: string, index: number}}
 */
const AskLotVolume = { key: Ask, index: 2 }

/**
 * Ticker Bid Info: Key
 *
 * @type {string}
 */
const Bid = 'b';

/**
 *
 * @type {{key: string, index: number}}
 */
const BidPrice = { key: Bid, index: 0 }

/**
 *
 * @type {{key: string, index: number}}
 */
const BidWholeLotVolume = { key: Bid, index: 1 }

/**
 *
 * @type {{key: string, index: number}}
 */
const BidLotVolume = { key: Bid, index: 2 }

/**** === Close === *****/

/**
 * Last trade closed info
 *
 * @type {string}
 */
const Close = 'c'

/**
 *
 * @type {{key: string, index: number}}
 */
const ClosePrice = { key: Close, index: 0 }

/**
 *
 * @type {{key: string, index: number}}
 */
const CloseLotVolume = { key: Close, index: 1 }


const Volume = 'v'
const VolumeToday = { key: Volume, index: 0 }
const VolumeLast24h = { key: Volume, index: 1 }

const VolumeWeightedAveragePrice = 'p'
const VolumeWeightedAveragePriceToday = { key: VolumeWeightedAveragePrice, index: 0 }
const VolumeWeightedAveragePriceLast24h = { key: VolumeWeightedAveragePrice, index: 1 }

const Trades = 't'
const TradesToday = { key: Trades, index: 0 }
const TradesLast24h = { key: Trades, index: 1 }

const Low = 'l'
const LowPriceToday = { key: Low, index: 0 }
const LowPriceLast24h = { key: Low, index: 1 }

const High = 'l'
const HighPriceToday = { key: High, index: 0 }
const HighPriceLast24h = { key: High, index: 1 }

const OpenPrice = 'o'

module.exports = {
  Ask,
  AskPrice,
  AskWholeLotVolume,
  AskLotVolume,
  Bid,
  BidPrice,
  BidWholeLotVolume,
  BidLotVolume,
  Close,
  ClosePrice,
  CloseLotVolume,
  Volume,
  VolumeToday,
  VolumeLast24h,
  VolumeWeightedAveragePrice,
  VolumeWeightedAveragePriceToday,
  VolumeWeightedAveragePriceLast24h,
  Trades,
  TradesToday,
  TradesLast24h,
  Low,
  LowPriceToday,
  LowPriceLast24h,
  High,
  HighPriceToday,
  HighPriceLast24h,
  OpenPrice
}
