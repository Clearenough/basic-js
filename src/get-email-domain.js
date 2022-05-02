const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = ''
  let index
  for(let i = 0;; i++){
    if(email[i] === '@'){
      index = i
      break
    }
  }
  res = email.slice(index + 1)
  if(res.includes('@')) return getEmailDomain(res)
  return res
}

module.exports = {
  getEmailDomain
};
