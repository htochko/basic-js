const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let additionStr = '';
  if (options.addition !== undefined) {
    const addVal = String(options.addition);
    const addRepeat = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
    const addSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

    const addParts = [];
    for (let i = 0; i < addRepeat; i++) {
      addParts.push(addVal);
    }
    additionStr = addParts.join(addSeparator);
  }

  // 2. Combine base string with the addition
  const baseStr = String(str) + additionStr;

  // 3. Extract and format the main repetition part
  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const separator = options.separator !== undefined ? options.separator : '+';

  const mainParts = [];
  for (let i = 0; i < repeatTimes; i++) {
    mainParts.push(baseStr);
  }

  return mainParts.join(separator);
}  

module.exports = {
  repeater
};
