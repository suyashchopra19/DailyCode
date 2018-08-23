const maxProfit = (prices) => {
    let profit = 0
    let diff = 0
    let min = Infinity

    for(let price of prices){
        if(price < min) min = price
        diff = price - min
        if(diff > profit ) profit = diff
    }
    return profit
}