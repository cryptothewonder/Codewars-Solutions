// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

//solutions
function quadrant(x, y) {
    return x=== Math.abs(x) && y===Math.abs(y) ?  1 :
     x!== Math.abs(x) && y===Math.abs(y) ? 2 :
      x!== Math.abs(x) && y!==Math.abs(y) ? 3 :
       4  
}

function quadrant(x, y) {
    if (x > 0) {
      if (y > 0) {
        return 1;
      } else {
        return 4;
      }
    } else {
      if (y > 0) {
        return 2;
      } else {
        return 3;
      }
    }
  }