function permutation (array) {
  const completePermuataions = []
  helper(0, array, completePermuataions)
  return completePermuataions
}

function helper (i, array, completePermuataions) {
  if (i === array.length -1) completePermuataions.push(array.slice())
  else {
    for (let j = i ; j < array.length; j++) {
      // [array[i], array[j]] = [array[j], array[i]]
      swap(i, j, array)
      helper(i+1, array, completePermuataions)
      swap(i, j, array)
    }
  }
}

function swap(i, j, array) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

console.log(permutation([1,2,3]))

function permutation1 (array) {
  const completedPermuataions = []
  helper1(array, [], completedPermuataions)
  return completedPermuataions
}

function helper1(array, currentPermutation, completedPermuataions) {
  if (!array.length && currentPermutation.length) completedPermuataions.push(currentPermutation)
  else {
    for (let i = 0 ; i < array.length; i++){
      const newArr = array.slice(0,i).concat(array.slice(i+1)) // creating new arr without element at index i
      const newPermutation = currentPermutation.concat([array[i]])
      helper1(newArr, newPermutation, completedPermuataions)
    }
  }
}

console.log(permutation1([1,2,3]))