

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0


//solutions
const sequenceSum = (begin, end, step) => {
    let ans = 0
    
    for(let i = begin; i<=end; i += step) {
      ans += i
    }
    return ans // May the Force be with you
  };