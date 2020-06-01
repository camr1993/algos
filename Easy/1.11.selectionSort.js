// Round 1:
function selectionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    let temp = array[i]
    let currentMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[currentMin]) {
        currentMin = j
      }
    }
    if (array[currentMin] !== array[i]) {
      array[i] = array[currentMin]
      array[currentMin] = temp
    }
  }
  return array
}

// Round 2:
function selectionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    let currentMin = array[i]
    let currentMinIdx = i
    for (let j = i; j < array.length; j++) {
      if (array[j] < currentMin) {
        currentMin = array[j]
        currentMinIdx = j
      }
    }
    if (currentMinIdx !== i) {
      let temp = array[i]
      array[i] = currentMin
      array[currentMinIdx] = temp
    }
  }
  return array
}
