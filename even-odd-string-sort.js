// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)


//solutions
function sortMyString(S) {
    let split = S.split('') 
    let even = split.filter((x,y)=> y%2===0)
    let odd = split.filter((x,y)=> y%2===1)// your code here
    return even.join('')+' '+odd.join('');
}