// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?


let findDuplicates = function(array){
    const result = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let index = Math.abs(element) - 1
        let newElement = array[index]
        if(newElement < 0) result.push(index+1)
        array[index] = - newElement
    }
    return result
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]))