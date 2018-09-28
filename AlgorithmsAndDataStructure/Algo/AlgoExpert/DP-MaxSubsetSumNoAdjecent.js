function maxSubsetSumNoAdjacent(array) {
  if(!array.length) return 
  if(array.length ===1) return array[0]
  let first = array[0]
  let second = Math.max(array[0], array[1])
  for (let i = 2; i < array.length; i++) {
    const element = array[i];
    let current = Math.max(second, first + array[i])
    first = second
		second = current
  }
  return second
}

// console.log(maxSubsetSumNoAdjacent([75,105,120,75,90,135]))

test('The input should have the correct output', () => {
  expect(maxSubsetSumNoAdjacent([75,105,120,75,90,135])).toBe(330)
})