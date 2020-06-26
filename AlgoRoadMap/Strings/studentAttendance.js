var checkRecord = function (s) {
  let A = 0
  let L = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      A++
    }
    if (s[i] === 'L') {
      L++
    } else {
      L = 0
    }
    if (L === 3) return false
  }
  return A <= 1
}
