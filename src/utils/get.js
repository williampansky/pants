/**
 * The get() method in lodash gets the value of an object at a specific path,
 * and let’s you optionally return a default value if one isn’t found. This
 * is a vanillaJS equivalent function to replicate that without the lib.
 *
 * @param {Object} obj The object to query.
 * @param {Array|String} path The path of the property to get.
 * @param {*} def The value returned for `undefined` resolved values.
 * @see https://gomakethings.com/how-to-get-the-value-of-an-object-from-a-specific-path-with-vanilla-js/
 * @see https://github.com/lodash/lodash/blob/4ea8c2ec249be046a0f4ae32539d652194caf74f/get.js
 */
export default function(obj, path, def) {
  /**
   * If the path is a string, convert it to an array
   * @param  {String|Array} path The path
   * @return {Array}             The path array
   */
  const stringToPath = function(path) {
    // If the path isn't a string, return it
    if (typeof path !== 'string') return path;

    // Create new array
    let output = [];

    // Split to an array with dot notation
    path.split('.').forEach(function(item, index) {
      // Split to an array with bracket notation
      item.split(/\[([^}]+)\]/g).forEach(function(key) {
        // Push to the new array
        if (key.length > 0) {
          output.push(key);
        }
      });
    });

    return output;
  };

  // Get the path as an array
  path = stringToPath(path);

  // Cache the current object
  let current = obj;

  // For each item in the path, dig into the object
  for (let i = 0; i < path.length; i++) {
    // If the item isn't found, return the default (or null)
    if (!current[path[i]]) return def;

    // Otherwise, update the current  value
    current = current[path[i]];
  }

  return current;
}
