const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};

let letterCombinations = d => {
    let size = d.length;
    if(!size) return []
    if(size ===1) return map[d].split('')

    let first = map[d[0]];
    let rest = letterCombinations(d.slice(1))
    const res = []
    for(let f of first){
        for(let r of rest){
            res.push(f+r)
        }
    }
    return res
}

console.log(letterCombinations('2'))