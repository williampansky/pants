/**
 * Takes in an UIkit component object & returns it
 * formatted properly for the DOM to read and parse.
 *
 * ```js
 * // INPUT
 * componentOptions({
 *  autoplay: false,
 *  center: false,
 *  draggable: true,
 * });
 *
 * // RETURNS
 * 'autoplay: false; center: false; draggable: true;'
 * ```
 *
 * @name component.options
 * @param {Object} object The object to DOM'ify.
 */
export default function(object) {
  return JSON.stringify(object)
    .replace('{', '')
    .replace('}', '')
    .replace(/(")/g, '')
    .replace(/(:)/g, ': ')
    .replace(/(,)/g, '; ')
    .concat('', ';');
}
