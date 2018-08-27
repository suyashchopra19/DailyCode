// There is a box protected by a password. The password is n digits, where each letter can be one of the first k digits 0, 1, ..., k-1.

// You can keep inputting the password, the password will automatically be matched against the last n digits entered.

// For example, assuming the password is "345", I can open it when I type "012345", but I enter a total of 6 digits.

// Please return any string of minimum length that is guaranteed to open the box after the entire string is inputted.

// Example 1:
// Input: n = 1, k = 2
// Output: "01"
// Note: "10" will be accepted too.


// var crackSafe = function(n, k) {
//     const visited = new Set();
//     const targetCount = Math.pow(k, n);
//     const arr = Array.from({length: n}, x => 0);
//     visited.add(arr.join(''));
    
//     dfs(arr, targetCount, visited, n, k);
    
//     return arr.join('');
// };

// function dfs(arr, targetCount, visited, n, k) {
//     if (visited.size === targetCount) return true;
    
//     const prev = arr.slice(arr.length - n + 1, arr.length);
//     for (let i = 0; i < k; i++) {
//         prev.push(i);
//         const str = prev.join('');
//         if (!visited.has(str)) {
//             visited.add(str);
//             arr.push(i);
//             if (dfs(arr, targetCount, visited, n, k)) return true;
//             else {
//                 visited.delete(str);
//                 arr.pop(i);
//             }
//         }
//     }
//     return false;
// }