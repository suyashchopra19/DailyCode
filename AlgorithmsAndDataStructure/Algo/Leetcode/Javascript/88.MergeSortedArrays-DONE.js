// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

function merge(arr1, m, arr2, n){
    let i = arr1.length -1
    let j = arr2.length -1
    let k = i+j +1

    while(k>=0){
        if(k === i) return arr1
        else if (k === j) return arr2
        else arr1[k--] = arr1[i] > arr2[j] ? arr1[i--]: arr2[j--]
    }
    return arr1
}

console.log(merge([1,2,3],0,[2,5,6],0))