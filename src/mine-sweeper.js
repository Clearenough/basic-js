const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  const columns = matrix[0].length
  const rows = matrix.length
  let field = []
  for(let i = 0; i < rows; i++){
    field.push([])
  }
  console.log(field)
  let cnt = 0
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      cnt = 0
      for(let k = i - 1; k < i + 2; k++){
        for(let r = j - 1; r < j + 2; r++){
          if(k >= 0 && r >= 0 && k < matrix.length && r < matrix[0].length){ 
              if(matrix[k][r]){
                 cnt++
              }
          }
        }
      }
      if(matrix[i][j]) cnt--
      field[i].push(cnt)
    }
  }
  return field
}


module.exports = {
  minesweeper
};
