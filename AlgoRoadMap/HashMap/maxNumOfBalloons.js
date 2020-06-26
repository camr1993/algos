var maxNumberOfBalloons = function (text) {
  let hash = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i] in hash) {
      hash[text[i]]++
    }
  }
  let counter = 0
  while (
    hash['b'] > 0 &&
    hash['a'] > 0 &&
    hash['l'] > 1 &&
    hash['o'] > 1 &&
    hash['n'] > 0
  ) {
    counter++
    hash['b']--
    hash['a']--
    hash['l'] -= 2
    hash['o'] -= 2
    hash['n']--
  }
  return counter
}
