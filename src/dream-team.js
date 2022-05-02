const { NotImplementedError } = require('../extensions/index.js');

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
  let team = ''
  if(members.length === 1 && typeof(members[0]) !== typeof('a') || members.length === 0) return false
  for(let member of members){
    if(typeof(member) === typeof('a')){
      team += member.split(' ').join('')[0]
    }
  }
  if(team.length == 0) return false
  team = [...team.toUpperCase()].sort().join('')
  return team
}

module.exports = {
  createDreamTeam
};
