const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let resArr = []
  if(!(arr instanceof Array)) throw Error('"arr" parameter must be an instance of the Array!')

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '--discard-next'){
      if(arr[i+1] === undefined) break
      resArr.push(arr[i-1])
      i++
      continue
    }
    else if(arr[i] === '--discard-prev'){
      resArr.push(arr[i+1])
      i++
      continue
    }
    else if(arr[i] === '--double-next'){
      if(arr[i+1] === undefined){
        break
      }
      resArr.push(arr[i+1])
      resArr.push(arr[i+1])
      i++
      continue
    }
    else if(arr[i] === '--double-prev'){
      if(arr[i-1] === undefined){
        continue
      }
      resArr.push(arr[i-1])
      resArr.push(arr[i-1])
      continue
    }
    
      resArr.push(arr[i])
  }
  return resArr
}


module.exports = {
  transform
};
