// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"



var longestPalindrome = function(s) {
    let current = [0,0];
    for(let i = 0; i< s.length; i++){
        let odd = getLongestPalindrome(s , i-1, i+1);
        let even = getLongestPalindrome(s, i-1, i);
        let longest = odd[1] - odd[0] > even[1]- even[0] ? odd:even
        current = current[1] - current[0] > longest[1]- longest[0] ? current: longest
    }
    return s.slice(current[0],current[1])
};

let getLongestPalindrome = function(string, leftIdx, rightIdx){
    while(leftIdx>= 0 && rightIdx < string.length){
        if(string[leftIdx] !== string[rightIdx]) break;
        leftIdx--
        rightIdx++
    }
    return [leftIdx+1, rightIdx]
}

