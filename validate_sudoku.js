// Write a function that accepts a Sudoku board, and returns true if it is a valid Sudoku solution, or false otherwise. The cells of the input Sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

//solutions
function validateSudoku(board) {
    let set = new Set() 
    let zeroSet = new Set()
    //number of rows
    for(let i=0; i<board.length; i++) {
      //number of columns 
      for(let j=0; j<board[0].length; j++) {
        let value = board[i][j]
        
        //String - value of the element and the row number. eg: '5 row-1'
        let row = value + ' row-' + i 
        //vice-versa
        let col = value + ' col-' + j
        //String - Value of the element and the box number it is present in (Total 9 boxes numbered from 0-8)
        let box = value + ' box-' + Math.floor(i/3) + "," + Math.floor(j/3) 
        
        //Checking if each row, column or box has same elements
        //For instance, lets say we have encountered 5 in row 1, so variable row becomes '5 row-1' and we add it to variable set
        //Now, if we encounter another 5 in row 1, variable row again becomes '5 row-1' 
        //ATQ, there should be unique elements in each row, col or box,
        //So, if we get the same string in the set again, this means the board is not valid

        //Also have zeroSet to check for multiple zeroes in which case the board is again invalid
        
        if(set.has(row) || set.has(col) || set.has(box) || zeroSet.has(0)) {
          return false
        }
        else {
          set.add(row)
          set.add(col)
          set.add(box)
          if(value === 0)
            zeroSet.add(value)
        }
      }
    }
  return true
}