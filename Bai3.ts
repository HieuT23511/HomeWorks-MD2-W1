//Viết chương trình đảo ngược một chuỗi

function exercise3 (str:string){
    let arr:string[]=str.split('');
    let arrReverse:string[]=[];
    for (let i = arr.length-1; i >=0; i--) {
    arrReverse.push(arr[i]);
    }
    return arrReverse;
}

let str:string = 'abcd1234';
console.log(exercise3(str));