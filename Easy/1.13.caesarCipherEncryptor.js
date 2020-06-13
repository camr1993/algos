// Round 1:
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let newStr = ''

  for (let i = 0; i < string.length; i++) {
    let currIdx = alphabet.indexOf(string[i])
    let newIdx = (currIdx + key) % 26
    newStr += alphabet[newIdx]
  }
  return newStr
}

// Round 2:
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let newStr = ''

  for (let i = 0; i < string.length; i++) {
    let currIdx = alphabet.indexOf(string[i])
    let newIdx = (currIdx + key) % 26
    newStr += alphabet[newIdx]
  }
  return newStr
}

// Round 3:
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let newStr = ''
  for (let i = 0; i < string.length; i++) {
    let idx = alphabet.indexOf(string[i])
    let newIdx = (idx + key) % 26
    newStr += alphabet[newIdx]
  }
  return newStr
}
