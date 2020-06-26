var reverseWords = function (s) {
  let arr = s.split(' ')
  for (let i = 0; i < arr.length; i++) {
    let newStr = ''
    for (let j = arr[i].length - 1; j >= 0; j--) {
      newStr += arr[i][j]
    }
    arr[i] = newStr
  }
  return arr.join(' ')
}
