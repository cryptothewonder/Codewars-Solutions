// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

//solutions
function sumDigPow(a, b) {
    var arr = [];
    for (var i = a; i <= b; i++) {
      var sum = 0;
      for (var j = 0; j <= String(i).length; j++) {
        sum += Math.pow(parseInt(String(i)[j]), j+1);  
        if (sum == i) arr.push(i);
      }
    }
    return arr;
  }

  function sumDigPow(a, b) {
    let ans = []
     for(let i=a; i<=b; i++){
       let local = Array.from(String(i), Number)
       let sum = 0
       for(let j=0; j<local.length; j++){
         sum += Math.pow(local[j],j+1)
         if(sum === i){
             ans.push(i)
           }
         }
    } return ans // Your code here
   }