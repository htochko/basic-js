const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  // blocking "enemy scouts"
  if (
    Object.prototype.toString.call(date) !== '[object Date]' ||
    isNaN(date.getTime()) ||
    Object.keys(date).length > 0
  ) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  // Months to seasons
  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
