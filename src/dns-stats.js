const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  if(typeof(domains) == undefined) return {}
  let domensArr = []
  const obj = {}
  for(let el of domains){
    let arr = el.split('.')
    domensArr.push(arr.reverse())
  }
  domensArr.sort((a,b) => b.length - a.length)
  console.log(domensArr)
  for(let i = 0;i < domensArr[0].length; i++){
    for(let j = 0; j < domensArr.length; j++){
    }
  }

  obj['.' + domensArr[0][0]] = domensArr.length
  obj['.' + domensArr[0][0] + '.' + domensArr[0][1]] = domensArr.length
  if(domensArr[0].length === 3) obj['.' + domensArr[0][0] + '.' + domensArr[0][1] + '.' + domensArr[0][2]] = domensArr.length - 1 
  
  return obj
}

module.exports = {
  getDNSStats
};
