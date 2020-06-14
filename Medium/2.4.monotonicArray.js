function isMonotonic(array) {
  // Write your code here.
  let mono = true
  // let increasing = array[1] > array[0] ? true : false
  let increasing = findIncreasing(array)
  for (let i = 1; i < array.length; i++) {
    if (increasing) {
      if (array[i] < array[i - 1]) {
        return false
      }
    } else {
      if (array[i] > array[i - 1]) {
        return false
      }
    }
  }
  return true
}

function findIncreasing(array) {
  let idx = 1
  while (array.length > 1 && array[idx] === array[idx - 1]) {
    idx++
  }
  return array[idx] > array[idx - 1]
}

// Round 2:
function isMonotonic(array) {
  // Write your code here.
  let inc = false
  let dec = false

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      inc = true
    }
    if (array[i] < array[i - 1]) {
      dec = true
    }
  }
  if (inc && dec) {
    return false
  } else {
    return true
  }
}
