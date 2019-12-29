/**
 * Takes in an array and returns it as a string.
 *
 * ```js
 * // INPUT
 * classesArray([
 *  'homecard',
 *  'uk-card',
 *  'uk-card-default'
 * ]);
 *
 * // RETURNS
 * 'homecard uk-card uk-card-default'
 * ```
 *
 * @name classesArray
 * @param {Array} array The array to stringify.
 */
export default function classesArray(array = []) {
  return array.join(' ');
}
