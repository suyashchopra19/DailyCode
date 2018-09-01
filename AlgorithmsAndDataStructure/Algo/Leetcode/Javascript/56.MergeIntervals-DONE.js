// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considerred overlapping.

function merge(intervals){
    intervals.sort((a,b) => a[0]- b[0] )

    let i =0;
    while(i < intervals.length -1){
        if(intervals[i][1] >= intervals[i+1][0]){
            intervals[i][1] = Math.max(intervals[i][1],intervals[i+1][1])
            intervals.splice(i+1,1)
        }
        else i++
    }
    return intervals;
}



// var merge = function (intervals) {
//     var i = 0;
//     intervals.sort(function (a, b) {
//         return a.start - b.start;
//     })
//     while (i < intervals.length - 1) {
//         if (intervals[i].end >= intervals[i + 1].start) {
//             intervals[i].end = Math.max(intervals[i].end, intervals[i + 1].end);
//             intervals.splice(i + 1, 1);
//         } else i++;
//     }
//     return intervals;
// };