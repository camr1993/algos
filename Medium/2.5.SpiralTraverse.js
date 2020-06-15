/* eslint-disable complexity */
// Round 1:
function spiralTraverse(array) {
  // Write your code here.
  const result = []
  let startRow = 0
  let endRow = array.length - 1
  let startCol = 0
  let endCol = array[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    // traversing through the starting row (right),
    // and adding each row element (col) to results
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col])
    }

    // iterate (down) through each row (starting at 2nd row)
    // add each element but only at endCol!
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol])
    }
    // iterate backwards (left) through bottom row
    for (let col = endCol - 1; col >= startCol; col--) {
      // if single row at end of matrix, don't need to
      // do this backwards logic
      if (startRow === endRow) break
      result.push(array[endRow][col])
    }
    // iterate (up) through each row
    // only at startCol
    for (let row = endRow - 1; row > startRow; row--) {
      // if single col at end of matric, no need to
      // go back up
      if (startCol === endCol) break
      result.push(array[row][startCol])
    }

    startRow++
    endRow--
    startCol++
    endCol--
  }
  return result
}

// Round 2:
function spiralTraverse(array) {
  const result = []
  let startRow = 0
  let startCol = 0
  let endRow = array.length - 1
  let endCol = array[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(array[startRow][i])
    }
    for (let i = startRow + 1; i <= endRow; i++) {
      result.push(array[i][endCol])
    }
    for (let i = endCol - 1; i >= startCol; i--) {
      if (startRow === endRow) break
      result.push(array[endRow][i])
    }
    for (let i = endRow - 1; i > startRow; i--) {
      if (startCol === endCol) break
      result.push(array[i][startCol])
    }

    startRow++
    startCol++
    endRow--
    endCol--
  }
  return result
}
