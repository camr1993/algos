var mostCommonWord = function (paragraph, banned) {
  let bannedHash = {}
  for (let i = 0; i < banned.length; i++) {
    bannedHash[banned[i].toLowerCase()] = true
  }

  var pArr = paragraph
    .replace(/[!\?\'\,\;\.]/g, ' ')
    .toLowerCase()
    .split(/[ ]+/)
    .filter((word) => {
      return !bannedHash[word]
    })

  let words = {}
  let longest = pArr[0]
  for (let i = 0; i < pArr.length; i++) {
    if (bannedHash[pArr[i]]) continue
    let word = pArr[i]
    words[word] = words[word] + 1 || 1
    if (words[word] > words[longest]) {
      longest = word
    }
  }
  return longest
}
