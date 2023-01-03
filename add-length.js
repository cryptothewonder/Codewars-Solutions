//Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .


//solution
function addLength(str) {
    return str.split(' ').map(x => x + ` ${x.length}`);
  }