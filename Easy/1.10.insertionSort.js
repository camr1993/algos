// Round 1:
function insertionSort(array) {
  // Write your code here.

  for (let i = 1; i < array.length; i++) {
    // if out of order
    if (array[i] < array[i - 1]) {
      for (let j = i - 1; j >= 0; j--) {
        // keep swapping until its in the right place
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        if (array[j - 1] < array[j]) {
          break
        }
      }
    }
  }
  return array
}

// Round 2:
function insertionSort(array) {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      for (let j = i; j > 0; j--) {
        if (array[j] < array[j - 1]) {
          let temp = array[j]
          array[j] = array[j - 1]
          array[j - 1] = temp
        }
      }
    }
  }
  return array
}
