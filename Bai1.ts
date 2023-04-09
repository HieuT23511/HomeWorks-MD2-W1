
function exercise1 (arr:number[],n:number){
    let arr1:number[][]=[];
    for (let i = 0; i < arr.length; i+=n) {
        arr1.push(arr.slice(i,n+i))
    }
    return arr1;
}
let arr = [1,5,7,8,9,6,2];
console.log(exercise1(arr,3));