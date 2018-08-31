// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0, 1, 2, 4, 5, 6, 7] might become[4, 5, 6, 7, 0, 1, 2]).

// You are given a target value to search.If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
// Output: -1

var search = function (nums, target) {
    let left = 0 
    let right = nums.length -1
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(target === nums[mid]) return mid;
        // so one side of the pivot(mid) needs to be sorted. if both are sorted chose any.
        else if(nums[mid] < nums[right] ){ // this means mid to end is sorted so the pivot lies to the left of mid
            // check if our target lies in the part which is greater than mid
            if(target > nums[mid] || target < nums[right]) low = mid +1
            else high = mid -1
        }else {
            if(target < nums[mid] || target > nums[left])high = mid -1
            else low = mid + 1
        }
    }
    return -1
}
