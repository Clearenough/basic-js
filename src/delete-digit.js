const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n){
  let arr = [...(n + '')]
  let max = 0
  let num = ''
  for(let j = 0; j < arr.length; j++){
    for(let i = 0; i < arr.length; i++){
      if(i !== j){
        num += arr[i]
      }
    }
    if(+num > max){
      max = +num
    }
    num = ''
  }
  return max
}

module.exports = {
  deleteDigit
};
