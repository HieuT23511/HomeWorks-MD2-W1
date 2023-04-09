//Exercise1: Viết chương trình đầu vào 1 mảng và giá trị n. Đầu ra chương trình là 1 mảng 2 chiều sao cho mỗi phần tử trong mảng 2 chiều là 1 mảng gồm n phần tử từ mảng đã cho.
// Ví dụ: arr = [1,2,3,4,5]
// n = 2: output = [ [1,2], [3,4], [5] ]
// n = 3: output = [ [1,2,3], [4,5] ]
// n = 4: output = [ [1,2,3,4], [5] ]
function exercise1 (arr:number[],n:number){
    let arr1:number[][]=[];
    for (let i = 0; i < arr.length; i+=n) {
        arr1.push(arr.slice(i,n+i))
    }
    return arr1;
}
let arr = [1,5,7,8,9,6,2];
console.log(exercise1(arr,3));