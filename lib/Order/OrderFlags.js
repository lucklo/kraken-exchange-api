/**
 * Volume in quote currency (not available for leveraged orders)
 *
 * @type {string}
 */
const VolumeInQuoteCurrency = 'viqc'

/**
 * Prefer fee in base currency
 *
 * @type {string}
 */
const PreferFeeInBaseCurrency = 'fcib'

/**
 * Prefer fee in quote currency
 *
 * @type {string}
 */
const PreferFeeInQuoteCurrency = 'fciq'

/**
 * No market price protection
 *
 * @type {string}
 */
const NoMarketPriceProtection = 'nompp'

/**
 * Post only order (available when OrderType = limit)
 *
 * @type {string}
 */
const PostOnlyOrder = 'post'

module.exports = {
  VolumeInQuoteCurrency,
  PreferFeeInBaseCurrency,
  PreferFeeInQuoteCurrency,
  NoMarketPriceProtection,
  PostOnlyOrder
}