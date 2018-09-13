function kadanesAlgorithm(arr) {
    let max = arr[0]
    let maxAtIndex = arr[0]

    for (let i = 1; i < arr.length; i++) {
        const number = arr[i];
        maxAtIndex = Math.max (number, number + maxAtIndex)
        max = Math.max(maxAtIndex,max)
    }
    return max
}
   