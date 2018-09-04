// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

// Note:

// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.


var shortestToChar = function(s,c){
    let result = []

    let leftPointer = -1;
    // starting from left, we will push new values in result 
    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i) ===c) leftPointer = i;
        if(leftPointer < 0) result.push(s.length)
        else result.push(i - leftPointer)
    }

    let rightPointer = -1;
    for (let i = s.length-1; i >= 0; i--) {
        if(s.charAt(i)===c) rightPointer = i;
        if(rightPointer >=0) result[i] = Math.min(result[i], rightPointer - i)
    }
    return result
}