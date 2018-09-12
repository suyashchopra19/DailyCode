function diskStacking (disks) {
    // sort the disks according to heights
    disks.sort((a,b) => a[2] - b[2] );
    // creating a new of only the heights in the ascending order
    let heights = disks.map(disk => disk[2]);
    // creating a new array to track the subArrays
    let seq = new Array (disks.length);
    let maxHeight = 0;

    for (let i = 1; i < disks.length; i++) {
        const currentDisk = disks[i];
        for (let j = 0; j < i; j++) {
            const otherDisk = disks[j];
            
            if(dimensionsAreValid(otherDisk, currentDisk)){
                if(heights[i] <= currentDisk[2] + heights[j]){
                    heights[i] = currentDisk[2] + heights[j]
                    seq[i] = j
                }
            }
        }
        if(heights[i] >= heights[maxHeight]) maxHeight = i
    }
    return buildResult(disks, seq, maxHeight)
}

function dimensionsAreValid(o, c){
    return o[0] < c[0] && o[1] < c[1] && o[2] < c[2]
}

function buildResult(array, seq, idx){
    const result = []
    while(idx !== undefined){
        result.unshift(array[idx])
        idx = seq[idx]
    }
    return result;
}

console.log(diskStacking([[2,1,2],[3,2,3],[2,2,8],[2,3,4],[1,2,1],[4,4,5]]))