function minNumberOfCoinsForChange(n, change) {
  let array = new Array(n+1).fill(Infinity)
  array[0] = 0
  for(let currentCoin of change) {
    for (let nAmount = 0; nAmount < n+1 ; nAmount++) {
      const element = array[nAmount];
      if (currentCoin <= nAmount) {
        array[nAmount] = Math.min(array[nAmount], array[nAmount - currentCoin]+ 1)
      }
    }
  }
  return array[n] !== Infinity ? array[n] : -1
}

console.log(minNumberOfCoinsForChange(10, [1,2,3,4]))