var reverseOnlyLetters = function (S) {
  let left = 0
  let right = S.length - 1
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let arr = S.split('')

  while (left < right) {
    if (
      alphabet.includes(arr[left].toLowerCase()) &&
      alphabet.includes(arr[right].toLowerCase())
    ) {
      let temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
    } else if (alphabet.includes(arr[left].toLowerCase())) {
      right--
    } else {
      left++
    }
  }
  return arr.join('')
}
