// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.


var hammingDistance = function(x, y) {
  let z = x ^ y; // XOR 
  let res = 0
  z = z.toString(2) // convert the number into a string of binary bits
  for(let i = 0; i < z.length; i++){
      if (z[i]==1) res +=1 // calculate number of 1's
  }
  return res
};