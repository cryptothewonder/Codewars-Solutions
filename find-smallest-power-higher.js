//solutions

// We need a function find_next_power ( findNextPower in JavaScript, CoffeeScript and Haskell), that receives two arguments, a value val, and the exponent of the power, pow_, and outputs the value that we want to find.



function findNextPower(val, pow_) {
    for (let i = 1; i <= val; i++) {
     if (Math.pow(i, pow_) > val) {
       return Math.pow(i, pow_);
     }
   }
 }

