// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// Note: Math.pow and some other Math functions like eval() and ** are disabled.

//solutions
function numberToPower(number, power){
    let result = 1;
    for (let i = 0; i < power; i ++) {
    result *= number 
    }
    return result
       }

 const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power-1) : 1;