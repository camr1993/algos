var findCircleNum = function (M) {
  let count = 0
  const visited = {}
  for (let i = 0; i < M.length; i++) {
    // if you havent visited this row yet,
    // add 1 to count (all rows have 1 for (i, i))
    // and look for other friends
    if (!visited[i]) {
      findFriends(M, i, visited)
      count++
    }
  }
  return count
}

// takes in students, current row, and visited object
function findFriends(M, i, visited) {
  for (let j = 0; j < M[i].length; j++) {
    // checking if in a friend group and if that friend (aka the row) has already been visited
    if (M[i][j] === 1 && !visited[j]) {
      visited[j] = true
      findFriends(M, j, visited) // now check j's row!
    }
  }
}
