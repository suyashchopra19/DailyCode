// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// The array may contain duplicates.

// Example 1:

// Input: [1,3,5]
// Output: 1
// Example 2:

// Input: [2,2,2,0,1]
// Output: 0

var findMin = function (arr) {
    if (arr.length === 1) return arr[0]
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] > arr[right]) left = mid + 1
        else if (arr[mid] < arr[right]) right = mid
        else right--
    }
    return arr[left]
};