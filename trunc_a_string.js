// Truncate the given string (first argument) if it is longer than the given maximum length (second argument). Return the truncated string with a "..." ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

//solutions
function truncateString(str, num) {
    let ans = str.split('').splice(0,num-3)
    if(num>=str.length){
      return str
    } else if(num<=3) {
      return str.split('').splice(0,num).join('')+'...'
    } else {
      return ans.join('')+'...'
    }
}

function truncateString(str, num) {
    return str.length > num ? str.slice(0,num>3 ? num-3 : num)+"..." : str
  }