//Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

// Task: Given the summary, find the number of pages n the book has.

//solution
function amountOfPages(summary){
    let counter = 1;
    let string = '';
    
    while(string.length < summary) {
      string += counter
      counter++
    }
    return counter - 1
    
  }