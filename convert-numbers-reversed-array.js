//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//solution
function digitize(n) {
    let r = Array.from(String(n), Number)
    return r.reverse() //code here
   }