/**
 * Market
 *
 * @type {string}
 */
const Market = 'market'

/**
 * Limit
 *
 * @type {string}
 */
const Limit = 'limit'

/**
 * price = stop loss price
 *
 * @type {string}
 */
const StopLoss = 'stop-loss'

/**
 * price = take profit price
 *
 * @type {string}
 */
const TakeProfit = 'take-profit'

/**
 * price = stop loss price,
 * price2 = take profit price
 *
 * @type {string}
 */
const StopLossProfit = 'stop-loss-profit'

/**
 * price = stop loss price,
 * price2 = take profit price
 *
 * @type {string}
 */
const StopLossProfitLimit = 'stop-loss-profit-limit'

/**
 * price = stop loss trigger price,
 * price2 = triggered limit price
 *
 * @type {string}
 */
const StopLossLimit = 'stop-loss-limit'

/**
 * price = take profit trigger price,
 * price2 = triggered limit price
 *
 * @type {string}
 */
const TakeProfitLimit = 'take-profit-limit'

/**
 * price = trailing stop offset
 *
 * @type {string}
 */
const TrailingStop = 'trailing-stop'

/**
 * price = trailing stop offset,
 * price2 = triggered limit offset
 *
 * @type {string}
 */
const TrailingStopLimit = 'trailing-stop-limit'

/**
 * price = stop loss price,
 * price2 = limit price
 *
 * @type {string}
 */
const StopLossAndLimit = 'stop-loss-and-limit'

/**
 * Settle Position
 *
 * @type {string}
 */
const SettlePosition = 'settle-position'

module.exports = {
  Market,
  Limit,
  StopLoss,
  TakeProfit,
  TakeProfitLimit,
  StopLossProfit,
  StopLossProfitLimit,
  StopLossLimit,
  TrailingStop,
  TrailingStopLimit,
  StopLossAndLimit,
  SettlePosition
}
