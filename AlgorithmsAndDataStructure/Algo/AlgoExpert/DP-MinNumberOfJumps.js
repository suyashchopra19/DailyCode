// Given an array of integers where each element represents the max number of steps that can be made forward from that element. Write a function to return the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then cannot move through that element.

// Example:

// Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// Output: 3 (1-> 3 -> 8 ->9)
// First element is 1, so can only go to 3. Second element is 3, so can make at most 3 steps eg to 5 or 8 or 9.

function minJump(arr){
  if (arr.length ===1 ) return 0
  let jumps = 0
  let steps = arr[0]
  let maxReach = arr[0]
  for (let i = 1; i < array.length; i++) {
    maxReach = Math.max(maxReach, arr[i] + i)
    step--
    if(steps ===0){
      jumps++
      steps = maxReach - i
    }
  }
  return jumps+1
}

console.log(minJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));