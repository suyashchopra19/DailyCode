// Given N jobs where every job is represented by following three elements of it.

// Start Time
// Finish Time
// Profit or Value Associated
// Find the maximum profit subset of jobs such that no two jobs in the subset overlap.

// Example:

// Input: Number of Jobs n = 4
//        Job Details {Start Time, Finish Time, Profit}
//        Job 1:  {1, 2, 50} 
//        Job 2:  {3, 5, 20}
//        Job 3:  {6, 19, 100}
//        Job 4:  {2, 100, 200}
// Output: The maximum profit is 250.
// We can get the maximum profit by scheduling jobs 1 and 4.
// Note that there is longer schedules possible Jobs 1, 2 and 3 
// but the profit with this schedule is 20+50+100 which is less than 250. 

// Time : O(NlogN), Space: O(N)

function BinarySearch(job, start){
  let lo = 0
  let high = start -1 
  console.log('here')
  while(lo <= high){
    let mid = Math.floor((lo + high)/2)
    if(job[mid][1] <= job[start][0]){
      if(job[mid+1][1] <= job[start][0]) return lo = mid +1
      else return mid
    }else high = mid -1
  }
  return -1
}

function  Schedule(job){
  job = job.sort((a,b)=> a[1] - b[1])
  console.log(job)
  let table = new Array(job.length)
  table[0] = job[0][2]
  console.log(job[0], table)
  for(let i = 1; i < job.length; i++){
    let initialProfit = job[i][2]
    let l = BinarySearch(job, i)
    if(l != -1) initialProfit += table[l]
    table[i] = Math.max(initialProfit, table[i-1])
  }
  return table[job.length-1]
}

console.log(Schedule([[1, 2, 50],[3, 5, 20],[6, 19, 100],[2, 100, 200]]))