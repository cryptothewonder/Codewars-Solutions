//You will be given a list of numbers and their arithmetic mean. However, the list is missing one number. Using this information, you must figure out and return the geometric mean of the FULL LIST, including the number that's missing.


//solutions
function geo_mean(nums, arith_mean) {
    let missNum = arith_mean*(nums.length+1) + nums.reduce((x,y) => x-y,0)
    let med = nums.reduce((x,y) => x*y,missNum)
    return Math.pow(med,1/(nums.length+1))
    
  }

  function geoMean(nums, arithMean) {
    let fullCount = nums.length + 1;
    let fullSum = arithMean * fullCount;
    let partialSum = nums.reduce((total, number)=> total + number, 0);
    let missing = fullSum - partialSum;
    let multiplied = nums.reduce((product, number)=> product * number, missing);
    let geoMean = multiplied ** (1 / fullCount);
    return geoMean;
  }
  
  const geo_mean = geoMean;