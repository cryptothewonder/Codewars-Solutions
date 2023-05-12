// Define a method/function that removes from a given array of integers all the values contained in a second array.

//solutions

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(x => {
      return values_list.indexOf(x) <0
    })
  }