// Round 1:
function binarySearch(arr, target) {
  // Write your code here.
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let testVal = arr[mid]

    if (testVal < target) {
      left = mid + 1
    } else if (testVal > target) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

function binarySearch(arr, target) {
  // Write your code here.
  return binarySearchHelper(arr, target, 0, arr.length - 1)
  // below code finds if it is there, but we need the index
  // of the target in the ORIGINAL ARRAY!
  // let mid = Math.floor((arr.length-1)/2)
  // if (arr[mid] === target) {
  // 	return mid
  // }
  // if (arr.length === 1) {
  // 	return -1
  // }
  // if (target < arr[mid]) {
  // 	return binarySearch(arr.slice(0,mid), target)
  // }
  // if (target > arr[mid]) {
  // 	return binarySearch(arr.slice(mid+1), target)
  // }
}

function binarySearchHelper(arr, target, left, right) {
  if (left > right) return -1
  let mid = Math.floor((left + right) / 2)
  if (arr[mid] === target) {
    return mid
  } else if (target < arr[mid]) {
    return binarySearchHelper(arr, target, left, mid - 1)
  } else {
    return binarySearchHelper(arr, target, mid + 1, right)
  }
}

// Round 2:
function binarySearch(array, target) {
  // Write your code here.
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target < array[mid]) {
      right = mid - 1
    } else if (target > array[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

// Round 3:
function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target < arr[mid]) {
      right = mid - 1
    } else if (target > arr[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
