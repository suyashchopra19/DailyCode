// input : [1,2,3]
// output : [[],[1],[2],[3],[1,2],[2,3],[1,3],[1,2,3]]

function PowerSet(arr) {
  let result = [[]]
  for(let i =0; i < arr.length; i++) {
    for(let j = result.length-1 ; j >= 0; j--){
      result.push(result[j].concat(arr[i]))
    }
  }
  return result
}

console.log(PowerSet([1,2,3]))