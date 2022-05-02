const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let cnt = 0
  let s3 = s1.split('').sort().join('')
  let s4 = s2.split('').sort().join('')
  console.log(s3)
  console.log(s4)
  let current = 0
  for(let i = 0; i < s3.length; i++){

    for(let j = current; j < s4.length; j++){
      if(s3[i] === s4[j]){
          cnt++
          current = j + 1
          break
      }

    }
  }
  return cnt
}

module.exports = {
  getCommonCharacterCount
};
