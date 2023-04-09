//Viết chương trình đầu vào 4 mảng, đầu ra mảng có tổng các phần tử lớn nhất

// function exercise2(arr1: number[], arr2: number[], arr3: number[], arr4: number[]) {
//     let arr: number[][] = [];
//     arr.push(arr1, arr2, arr3, arr4);
function exercise2 (...arr:number[][]){
    let arrSum: number[] = arr.map((eltArr: number[]) => sumElt(eltArr))
    let maxTotal:number = Math.max(...arrSum)
    arr.forEach(eltArr=>{
        if(sumElt(eltArr)===maxTotal){
            console.log(eltArr);
        }
    })
}

function sumElt(array: number[]) {
    // let total: number = 0;
    // array.forEach(elt => total += elt);
    return array.reduce((a,b)=>a+b);
}
let arr1= [1,3,5,7];
let arr2= [11,6,5,7];
let arr3= [1,8,5,9];
let arr4= [1,2,5,7];
let arr5= [1,22,5,7];
// console.log(exercise2(arr1,arr2,arr3,arr4,arr5));
exercise2(arr1,arr2,arr3,arr4,arr5);
