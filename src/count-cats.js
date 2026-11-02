const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
   let catsAmount = 0;
   const catSign = '^^';
   if (typeof matrix[Symbol.iterator] === 'function') {
    matrix.forEach((row) => {

    if (typeof row[Symbol.iterator] === 'function') {
     for (const cell of row) {
      catsAmount += cell === catSign ? 1 : 0;
     }
    }

   });
  }

  return catsAmount; 
}

module.exports = {
  countCats
};
