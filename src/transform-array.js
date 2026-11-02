const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    switch (current) {
      case '--discard-next':
        // Skip the next element
        i++; 
        break;

      case '--discard-prev':
        // Remove the previous element
        // We can check if the last element in result matches arr[i - 1]
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          result.pop();
        }
        break;

      case '--double-next':
        // Duplicate the next element if exists
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        // Duplicate the previous element
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          result.push(arr[i - 1]);
        }
        break;

      default:
        result.push(current);
        break;
    }
  }

  return result;
}

module.exports = {
  transform
};
