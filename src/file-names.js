const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let res = [names[0]]
  let k = 0
  let seit = new Set(names) 
  if(seit.size == names.length) return  names
  for(let i = 1; i < names.length; i++){
    k = 0
    for(let j = i - 1; j >= 0; j--){
      if(names[i] == names[j]) k++
    }
    if(k > 0){
      res.push(names[i] + `(${k})`)
    }
    else res.push(names[i])
  }
  if(seit.size !== res.length) return renameFiles(res)
}

module.exports = {
  renameFiles
};
