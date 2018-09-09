// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

var searchRange = function(nums, target) {
    if(!nums.length) return [-1, -1];
    return helper(nums, target)
} 

function helper (nums, target) {
    let [start, end] = [0,nums.length-1];
    let foundIdx = -1
    while (start <= end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] === target){
            foundIdx = mid;
            if(nums[mid] === nums[mid-1]) return [mid-1, mid]
            else return[mid, mid+1]
        }
        else if (nums[mid] < target) start = mid+1
        else end = mid -1
    }
    return foundIdx
}