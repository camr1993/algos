var checkIfExist = function (arr) {
  let hash = {}
  for (let i = 0; i < arr.length; i++) {
    let timesTwo = arr[i] * 2
    let divTwo = arr[i] / 2
    if (hash[arr[i]]) {
      return true
    } else {
      hash[timesTwo] = true
      hash[divTwo] = true
    }
  }
  return false
}
