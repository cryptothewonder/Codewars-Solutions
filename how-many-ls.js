function howMany(x){
    let ans = x.split('')
    let count = 0
    for(let i = 0; i<x.length; i++){
        if (ans[i]==='l'){
            count += 1
        }
    }
    return count
}