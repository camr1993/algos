var wordPattern = function (pattern, str) {
  let patternArr = pattern.split('')
  let stringArr = str.split(' ')
  if (patternArr.length !== stringArr.length) return false
  let pHash = {}
  let sHash = {}

  // in pHash: storing the patten letter with the associated string word
  // in sHash: storing the string word with the associated pattern letter
  // check both pHash === current string word, and sHash === current pattern letter

  for (let i = 0; i < patternArr.length; i++) {
    if (patternArr[i] in pHash) {
      if (pHash[pattern[i]] !== stringArr[i]) return false
    } else {
      pHash[patternArr[i]] = stringArr[i]
    }

    if (stringArr[i] in sHash) {
      if (sHash[stringArr[i]] !== patternArr[i]) return false
    } else {
      sHash[stringArr[i]] = patternArr[i]
    }
  }
  return true
}
