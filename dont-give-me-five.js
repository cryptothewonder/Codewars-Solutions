// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

//solutions
function dontGiveMeFive(start, end) {
    let ans = []
    for (let i = start; i <= end; i++) {
      if (!String(i).includes('5'))
      ans.push(i)
    }
    
    return ans.length
    
    }
    function dontGiveMeFive(start, end) {
        let count = 0;
    
        for (let i = start; i <= end; ++i)
            if (!i.toString().includes("5"))
                count++;
    
        return count;
    }