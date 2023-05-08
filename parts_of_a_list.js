function partlist(arr) {
    let result = [];
 for (let i = 1; i < arr.length; i++) {
   let left = arr.slice(0, i).join(' ');
   let right = arr.slice(i).join(' ');
   result.push([left, right]);
 }
 return result;

}