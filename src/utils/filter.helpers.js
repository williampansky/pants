import exists from 'utils/element.exists';
import { floorPlanFilterOptions } from 'models/sharedValues';
const { sortOrderOptions } = floorPlanFilterOptions;

/**
 * Maps the `value` string to a returned index to
 * pipe into the API post body for sorting.
 * @param {String} value string to parse and convert.
 * @requires models/sharedValues:sortOrderOptions
 */
export const handleSortOrderString = value => {
  switch (value) {
    case sortOrderOptions[0]:
      return 0;
    case sortOrderOptions[1]:
      return 1;
    case sortOrderOptions[2]:
      return 2;
    case sortOrderOptions[3]:
      return 3;
    case sortOrderOptions[4]:
      return 4;
    case sortOrderOptions[5]:
      return 5;
    default:
      return 0;
  }
};

/**
 * Queries the DOM, makes sure query target exists,
 * then sets `input.checked` to `false`.
 * @param {String} categoryName fieldset[data-set="categoryName"]
 * @param {String} filterName value to compare against
 */
export const unCheckInput = (categoryName, filterName) => {
  const filters = document.querySelectorAll(
    `.uk-drop [data-set="${categoryName}"] input`
  );

  filters.forEach(filter => {
    if (!exists(filter)) return;
    if (filter.value === filterName.toString()) filter.checked = false;
  });
};

/**
 * Queries all input fields in the `.uk-drop` DOM parent element,
 * then unchecks (`filter.checked`) the inputs.
 */
export const unCheckAllFilters = () => {
  const filters = document.querySelectorAll('.filters .uk-drop input');
  filters.forEach(filter => {
    if (!exists(filter)) return;
    filter.checked = false;
  });
};

/**
 * Recursively iterates thru the object and
 * returns a total count of active filters.
 *
 * @param {Object} object object to iterate thru
 * @see https://www.freecodecamp.org/forum/t/how-to-flatten-deeply-nested-array-of-objects-arrays-solved/171690
 */
export const calculateNumberOfActiveFilters = object => {
  const flatArray = Object.keys(object)
    .filter(key => key !== 'NumHalfBathrooms') // don't count both parts
    .map(k => object[k])
    .reduce(function iterate(r, array) {
      if (array === '' || array === null) return r;

      if (Array.isArray(array)) return array.reduce(iterate, r);

      if (typeof array === 'object')
        return Object.keys(array)
          .map(k => array[k])
          .reduce(iterate, r);

      return r.concat(array);
    }, []);

  return flatArray.length;
};
