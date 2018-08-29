var reverseString = function(s) {
    const arr = s.split('');
    let l = 0
    let r = arr.length-1
    while (l<r){
        [arr[l],arr[r]] = [arr[r],arr[l]]
        l++
        r--
    }
    return arr.join('');
};