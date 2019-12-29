/**
 * Formats the `number` param based on the `options` object.
 * @param {Number} number
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 */
export const renderPrice = (number, decimals = true) => {
  const locale = 'en-US';
  let options = {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
    useGrouping: true,
    notation: 'standard'
  };

  if (decimals === false) {
    options = {
      ...options,
      minimumSignificantDigits: 1,
      maximumSignificantDigits: 7
    };
  }

  return Intl.NumberFormat(locale, options).format(number);
};
