var generate = function (numRows) {
  let pascal = []
  for (let i = 0; i < numRows; i++) {
    let currentRow = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currentRow.push(1)
      } else {
        currentRow.push(pascal[i - 1][j - 1] + pascal[i - 1][j])
      }
    }
    pascal.push(currentRow)
    currentRow = []
  }
  return pascal
}
