// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//solutions
function countSheeps(arrayOfSheep) {
    let ans = 0
    for(let i=0; i<arrayOfSheep.length; i++){
        if(arrayOfSheep[i]=== true){
          ans ++
        }
    }
  
    return ans  // TODO May the force be with you
}

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }