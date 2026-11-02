const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const initials = [];

  for (const member of members) {
    // Check if the member is a string
    if (typeof member === 'string') {
      const trimmed = member.trim();
      if (trimmed.length > 0) {
        // Take the first letter, convert to uppercase, and push
        initials.push(trimmed[0].toUpperCase());
      }
    }
  }

  // Sort the initials alphabetically and join into a string
  const result = initials.sort().join('');

  return result.length > 0 ? result : false;
}

module.exports = {
  createDreamTeam
};
