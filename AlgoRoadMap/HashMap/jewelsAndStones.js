var numJewelsInStones = function (J, S) {
  let jHash = {}
  for (let i = 0; i < J.length; i++) {
    jHash[J[i]] = true
  }
  let count = 0
  for (let i = 0; i < S.length; i++) {
    if (jHash[S[i]]) {
      count++
    }
  }
  return count
}
