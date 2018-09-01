// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function (nums, k) {
    let map = {}
    let result = []

    nums.forEach(num => {
        if (!map[num]) map[num] = [num, 0]
        map[num][1] += 1
    })

    Object.values(map).forEach(value => result.push(value))

    return result.sort((a, b) => b[1] - a[1]).slice(0, k).map(a => a[0])
};