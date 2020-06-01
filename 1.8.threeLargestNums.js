// Round 1:
function findThreeLargestNumbers(array) {
  // Write your code here.
  let topThree = [null, null, null]

  for (let i = 0; i < array.length; i++) {
    let el = array[i]

    if (el > topThree[2] || topThree[2] === null) {
      topThree[0] = topThree[1]
      topThree[1] = topThree[2]
      topThree[2] = el
    } else if (el > topThree[1] || topThree[1] === null) {
      topThree[0] = topThree[1]
      topThree[1] = el
    } else if (el > topThree[0] || topThree[0] === null) {
      topThree[0] = el
    }
    console.log(topThree)
  }
  return topThree
}

// Round 2:
function findThreeLargestNumbers(array) {
  // Write your code here.
  let topThree = [-Infinity, -Infinity, -Infinity]

  for (let i = 0; i < array.length; i++) {
    let el = array[i]
    if (el > topThree[2]) {
      topThree[0] = topThree[1]
      topThree[1] = topThree[2]
      topThree[2] = el
    } else if (el > topThree[1]) {
      topThree[0] = topThree[1]
      topThree[1] = el
    } else if (el > topThree[0]) {
      topThree[0] = el
    }
  }
  return topThree
}
