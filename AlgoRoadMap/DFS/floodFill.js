/*
input:
[
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
]

sr = 1, sr = 1, newColor = 2

output:
[
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1]
]
*/

var floodFill = function (image, sr, sc, newColor) {
  let startColor = image[sr][sc]
  if (newColor === startColor) return image
  move(image, sr, sc, newColor, startColor)
  return image
}

function move(image, sr, sc, newColor, startColor) {
  if (sr < 0 || sc < 0 || sr > image.length - 1 || sc > image[0].length - 1) {
    return
  }

  if (image[sr][sc] !== startColor) return
  if (image[sr][sc] === startColor) {
    image[sr][sc] = newColor
  }

  // move left:
  move(image, sr, sc - 1, newColor, startColor)
  // move right:
  move(image, sr, sc + 1, newColor, startColor)
  // move up:
  move(image, sr - 1, sc, newColor, startColor)
  // move down:
  move(image, sr + 1, sc, newColor, startColor)
}
