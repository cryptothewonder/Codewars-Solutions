//solutions
function pillars(numPill, dist, width) {
    return  numPill===1 ? 0 : 100*((numPill-1)*dist)+(numPill-2)*width
  }