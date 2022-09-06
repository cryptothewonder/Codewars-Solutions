// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//solutions
function switcheroo(x){
    let ans = x.split('')
    let ans2 = []
    for(let i = 0; i<ans.length; i++){
      if(ans[i]==='a'){
        ans2.push('b')
      } else if(ans[i]==='b'){
        ans2.push('a')
      } else{
        ans2.push('c')
      }
    }
    return ans2.join('')
  }

  const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")