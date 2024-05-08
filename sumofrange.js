function range(start,end){
    let array =[]
for( let i=start;i<=end;i++){
    array.push(i)
}
return array
}
console.log(range(1,10))
function sum(num){
    let sum =0
    for( let numbers of num){
        sum +=numbers
    }
    return sum
}
console.log(sum(range(1,10)))