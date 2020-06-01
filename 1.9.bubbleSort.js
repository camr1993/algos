// Round 1:
function bubbleSort(array) {
  // Write your code here.
  let sorted = false

  while (!sorted) {
    let switchCounter = 0

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        switchCounter++
      }
    }
    if (switchCounter === 0) {
      sorted = true
    }
  }
  return array
}

// Round 2:
function bubbleSort(arr) {
  // Write your code here.
  let sorted = false

  while (sorted === false) {
    let count = 0
    for (let i = 1; i < arr.length; i++) {
      let temp = arr[i - 1]
      if (arr[i - 1] > arr[i]) {
        arr[i - 1] = arr[i]
        arr[i] = temp
        count++
      }
    }
    if (count === 0) {
      sorted = true
    }
  }
  return arr
}
