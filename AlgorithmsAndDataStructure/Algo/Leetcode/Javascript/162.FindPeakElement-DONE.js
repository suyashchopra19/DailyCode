// A peak element is an element that is greater than its neighbors.

// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that nums[-1] = nums[n] = -∞.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 1 or 5 
// Explanation: Your function can return either index number 1 where the peak element is 2, 
//              or index number 5 where the peak element is 6.


function findPeakElement(array){
    return search(array, 0, array.length-1)
}

function search(array, start, end){
    if(start === end) return start;

    let mid = Math.floor((start+end)/2)
    if(array[mid] > array[mid+1]) return search(array, start, mid)
    else search(array, mid, end )
}

function findPeakElement(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] > nums[mid + 1]) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
}