const all = (arr, fn) => arr.every(fn)

const fn = function(x){
  return x <= 1
}

console.log(all([1,2,3],fn))