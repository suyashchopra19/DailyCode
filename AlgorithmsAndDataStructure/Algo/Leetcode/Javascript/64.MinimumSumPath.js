// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

var minPathSum = function(grid) {
	if(grid.length < 1 || grid[0].length < 1) return;
	let row = grid.length;
	let col = grid[0].length;
    for(let j = 1; j < col; j++){
    	grid[0][j] += grid[0][j-1];
    }
    for(let i = 1; i < row; i++){
    	grid[i][0] += grid[i-1][0];
    }
    for(let i = 1; i < row; i++)
    	for(let j = 1; j < col; j++){
    		grid[i][j] = Math.min(grid[i][j-1], grid[i-1][j]) + grid[i][j];
    	}
    return grid[row-1][col-1];
};

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))