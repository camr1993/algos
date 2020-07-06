var removeDuplicates = function (s, k) {
  // keep count of same letter. If it ever gets to 3, substring the string
  // run recurively with new string
  // i is current idx
  // count is length of same letters
  let count = 1
  let i = 1
  while (i < s.length) {
    if (s[i - 1] === s[i]) {
      count++
    } else {
      count = 1
    }
    if (count >= k) {
      let newStr = s.substring(0, i - k + 1) + s.substring(i + 1)
      return removeDuplicates(newStr, k)
    }
    i++
  }
  return s
}
