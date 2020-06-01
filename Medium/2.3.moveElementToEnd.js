function moveElementToEnd(array, toMove) {
  // Write your code here.
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      count++
    }
  }
  let idx = 0
  while (count > 0) {
    if (array[idx] === toMove) {
      let temp = array.splice(idx, 1)
      array.push(temp[0])
      count--
    } else {
      idx++
    }
  }
  return array
}
