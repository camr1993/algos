var longestPalindrome = function (s) {
  let hash = {}
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] + 1 || 1
  }

  let longest = 0
  for (let key in hash) {
    if (hash[key] % 2 === 0) {
      longest += hash[key]
    } else {
      longest += hash[key] - 1
    }
  }
  return longest === s.length ? longest : longest + 1
}
