// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

const isValid = s => {
    const opening = '({[';
    const closing = ')}]';
    const match = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = []
    for(const char of s){
        if(opening.includes(char)) stack.push(char);
        else if(closing.includes(char)){
            if(stack.length ===0) return false;
            if(stack[stack.length -1 ] === match[char]) stack.pop()
            else return false;
        }
    }
    return stack.length ===0;
}