/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
    for (let element of array) {
      if (!set.has(element)) {
        return false;
      }
    }
    return true;
  }