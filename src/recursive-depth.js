const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
    let maxNestedDepth = 0;

    for (const item of arr) {
      if (Array.isArray(item)) {
        // Recursively find the depth of the nested array
        const currentDepth = this.calculateDepth(item);
        if (currentDepth > maxNestedDepth) {
          maxNestedDepth = currentDepth;
        }
      }
    }

    // Add 1 for the current level of the array
    return 1 + maxNestedDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
