// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Input : abcbadab
// Output: 10 -> 'a', 'b', 'c', 'b','a','d','a', 'b', 'abcba', 'badab'

var countSubstrings = function(s) {
    let res = 0
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        res += helper(s, i, i) //if its an odd palindrome // aba
        res += helper(s, i, i+1) // if it is an even palindrome //abba
    }
    return res
}

var helper = function(s, i, j) {
    let count = 0
    str =''
    while(i > 0 && j < s.length && s[i] === s[j]) {
        count++
        i--;
        j++
    } 
    return count
}

console.log(countSubstrings('abcbadab'))