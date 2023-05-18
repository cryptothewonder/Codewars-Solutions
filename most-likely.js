// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

//solutions
function mostLikely(prob1,prob2){
    let ans1 = eval(prob1.replace(':','/'))
    let ans2 = eval(prob2.replace(':','/'))
    return ans1 > ans2
    }

    const divide = (a, b) => a / b;
const mostLikely = (p1, p2) => divide(...p1.split(':')) > divide(...p2.split(':'));