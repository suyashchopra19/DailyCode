// Longest Substring Without Duplication

// Write a
// function that takes in a string and that returns its longest substring without duplicate characters.Assume that there will only be one longest substring without duplication.

// Sample input: "clementisacap"
// Sample output: "mentisac"

const longestSubstringWithoutDuplication = s => {
    const lastSeen = {}
    let longest = [0,0]
    let startIdx = 0

    for (let i = 0; i < s.length; i++) {
        let endIdx = i+1
        let char = s[i]
        //if we have seen the letter before, we start from seen char idx +1
        if(char in lastSeen){
            startIdx = Math.max(startIdx, lastSeen[char]+1)
        }
        lastSeen[char] = i
        // we check if the new string is longer than the old string 
        if(longest[1]- longest[0] < endIdx - startIdx){
            longest = [startIdx, endIdx]
        }
    }
    return s.slice(longest[0],longest[1])
}

const longestSubstringWithoutDuplication = s => {
    let lastSeen = {}
    let longest = [0,0];
    let startIdx =0
    for (let i = 0; i < s.length; i++) {
        let endIdx = i+1
        const element = s[i];
        if(element in lastSeen) startIdx = Math.max(startIdx, lastSeen[element] +1)
        lastSeen[element] = i
        if(longest[1] - longest[0] < endIdx - startIdx) longest = [startIdx,endIdx]
    }
    return s.slice[longest[0], longest[1]]
}