// Round 1:
function isPalindrome(string) {
  // Write your code here.
  let left = 0
  let right = string.length - 1

  while (string[left] === string[right]) {
    left++
    right--
    if (left >= right) {
      return true
    }
  }
  return false
}

// Round 2:
function isPalindrome(string) {
  // Write your code here.
  let left = 0
  let right = string.length - 1

  while (string[left] === string[right]) {
    left++
    right--
    if (left >= right) {
      return true
    }
  }
  return false
}
