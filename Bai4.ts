// Viết chương trình kiểm tra xem một số có phải là số hoàn hảo hay không.
// Một số hoàn hảo là số có tổng các ước số bằng chính nó.

function exercise4(inputNumber: number) {
    let total: number = 0;
    for (let i = 1; i < inputNumber; i++) {
        if (inputNumber % i === 0)
            total += i;
    }
    if (total === inputNumber) console.log(`The number ${inputNumber} is perfect number!`)
    else console.log(`The number ${inputNumber} is NOT perfect number!`)
}

exercise4(6);
