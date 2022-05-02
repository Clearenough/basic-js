const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let res = ''
  let i = 0
  let add
  let plus
  while(i < options.repeatTimes){
        res += str 
        for(let j = 0; j < options.additionRepeatTimes; j++){
          add = ('additionSeparator' in options) ? options.additionSeparator : '|'
          res += options.addition + add
        }
        add = ('separator' in options) ? options.separator : '+'
        if(i == options.repeatTimes - 1) add = ''
        res += add
        i++
  }
  return res
}

module.exports = {
  repeater
};
