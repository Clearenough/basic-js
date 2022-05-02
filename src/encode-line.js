const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str){
  let res = ''
  let cnt = 0
  let current = 0
  for(let i = 0; i < str.length; i++){
      cnt = 0
      i = current
      for(let j = i; j < str.length; j++){
          if(str[i] == str[j]){
              cnt++
              if(j == str.length -1 && cnt == 1){
                  res += str[j]
              }
              else if(j == str.length - 1 && cnt > 1){
                  res += cnt + str[j]
                  return res
              }
              continue
          }
          if(cnt > 1){
              res +=  cnt + str[i]
          }
          else{
              res += str[i]
          }
          current = j
          break
      }
  }
  return res
}


module.exports = {
  encodeLine
};
