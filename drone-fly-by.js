


//solutions
function flyBy(lamps, drone){
    // find the drone's length.
    //replace the 'x's' in the lamps string with 'o'
    ans = lamps.split('')
    for(let i=0; i<drone.length; i++){
    if(ans[i] === 'x'){
      ans[i] = 'o'
    } 
    }
    return ans.join('')
}

const flyBy = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``)