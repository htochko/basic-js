const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return 0;
  }

  let sum = 0;
  const numCols = matrix[0].length;
  // tracking columns under 0
  const blockedColumns = new Array(numCols).fill(false);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < numCols; col++) {
      const element = matrix[row][col];

      if (element === 0) {
        // exclude columns fron tracking
        blockedColumns[col] = true;
      } else if (!blockedColumns[col]) {
        sum += element;
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
