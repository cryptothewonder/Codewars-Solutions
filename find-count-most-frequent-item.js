//Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0


//solutions
function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;
    
    var count = Object.create(null);
    
    collection.forEach( item => {
      count[item] = (count[item] || 0) + 1;
    });
    
    return Math.max(...Object.values(count));
  }

  const _ = require('lodash');
const mostFrequentItemCount = collection => 
  collection.length 
    ? _(collection).countBy().values().max().valueOf() 
    : 0;