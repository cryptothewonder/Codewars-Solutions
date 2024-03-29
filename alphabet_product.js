
//I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.

//solutions
function alphabet(ns) {
    ns = ns.sort((a,b)=> a - b);
    
    for(let i = 0; i < ns.length - 1 ; i++){
      let result = ns[i] * ns[i+1]; 
      let idx = ns.indexOf(result);
      if(idx !== -1){
        ns.splice(idx,1);
      }
    }
    return ns[3];
  }

  function alphabet(ns) {
    let sorted = ns.sort((a,b) => a - b)
    return sorted[7] / sorted[sorted[0] * sorted[1] == sorted[2] ? 3 : 2]
  }