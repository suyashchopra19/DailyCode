// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

const threeSum = array => {
    let result = []
    array.sort((a, b) => a - b);
    for (let i = 0; i < array.length - 2; i++) {
        let l = i + 1
        let r = array.length - 1
        while (l < r) {
            let sum = array[l] + array[i] + array[r];
            if (sum === 0) {
                result.push([array[l], array[i], array[r]])
                l++;
                r--;
            } else if (sum > 0) r--
                else l++
        }
    }
    return result
}