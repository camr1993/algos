// Round 1:
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let idx = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[idx]) {
      idx++
    }
    if (idx === sequence.length) {
      return true
    }
  }
  return false
}

// Round 2:
function isValidSubsequence(array, sequence) {
  // Round 2
  let idx = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[idx]) {
      idx++
    }
    if (idx === sequence.length) {
      return true
    }
  }
  return false
}

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqIdx = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[seqIdx]) {
      seqIdx++
    }
    if (seqIdx === sequence.length) {
      return true
    }
  }
  return false
}
