
//solutions
function derDieDas(wort){
    let wort2 = wort.toLowerCase().split('')
    let wortCounter = 0 
    for(let i = 0; i<wort2.length; i++){
      if (wort2[i]=== 'a' || wort2[i]=== 'e' || wort2[i]=== 'i' || wort2[i]=== 'o' || wort2[i]=== 'u' ||  wort2[i]=== 'ü' || wort2[i]=== 'ä'){
        wortCounter += 1
      }
    }
   if(wortCounter <2){
     return `das ${wort}`
   } else if(wortCounter>3){
     return `der ${wort}`
   } else {
     return `die ${wort}`
   }
    //Du kannst es schaffen!
}

function derDieDas(wort) {
    var n = wort.split(/[aeiouäöü]/i).length - 1
    if (n < 2) return "das " + wort
    if (n > 3) return "der " + wort
    return "die " + wort
  }