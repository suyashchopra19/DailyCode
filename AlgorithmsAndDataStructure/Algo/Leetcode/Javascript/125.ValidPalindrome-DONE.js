function isPalindrome (s) {
    if (s.length < 2) return true;
    let l = 0
    let r = s.length - 1
    while (l < r){
        if(!helper(s[l])) l++
        else if (!helper(s[r])) r--
        else if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
        else {
            l++
            r--
        }
    }
    return true
}

function helper (char) {
    return(char >= 'a' && char <= 'z'
            || char >='A' && char <='Z'
            || char >= '0' && char <='9')
}