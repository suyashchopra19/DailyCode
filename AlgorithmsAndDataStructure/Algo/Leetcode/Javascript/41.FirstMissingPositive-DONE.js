// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1

var firstMissingPositive = function(nums) {
    var arr = [];
   for(let i = 0; i < nums.length; i++){     
       if(nums[i] > 0){
           arr[nums[i]-1] = nums[i];
       }
   }
   for(let i = 0; i < arr.length ; i++){
       if(arr[i] == undefined){
           return i + 1;
       }
   }
   return arr.length + 1;
};