// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

// Time O(mn * 4^l), l = word.length
// Space O(mn + l)

function exist(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (find(i, j, 0)) return true;
    }
  }
  return false;
}

function find(i, j, k) {
  if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1)
    return false;
  if (board[i][j] !== word[k]) return false;

  if (k === word.length - 1) return true;

  board[i][j] = "*"; // mark as visited

  if (find(i - 1, j, k + 1)) return true; // up
  if (find(i + 1, j, k + 1)) return true; // down
  if (find(i, j - 1, k + 1)) return true; // left
  if (find(i, j + 1, k + 1)) return true; // right

  board[i][j] = word[k]; // reset

  return false;
}

// -----------------------------------------------------------------------------------

var exist = function(board, word) {
  let h = board.length,
    w = board[0].length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  function dfs(i, j, k) {
    if (word.length === k) {
      return true;
    }
    if (
      i < 0 ||
      j < 0 ||
      i === board.length ||
      j === board[0].length ||
      board[i][j] !== word[k]
    ) {
      return false;
    }
    board[i][j] = "*";
    let result =
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1);
    board[i][j] = word[k];
    return result;
  }
  return false;
};
