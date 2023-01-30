function sumEvenNumbers(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length;i++) {
        let y = Number(arr[i]);
        if (y % 2 === 0) {
            sum += y
        }
    }
    console.log(sum);
}
sumEvenNumbers( ['1','2','3','4','5','6'])
sumEvenNumbers(['3','5','7','9'])
sumEvenNumbers(['2','4','6','8','10'])

// ['1','2','3','4','5','6']	12
// ['3','5','7','9']	0
// ['2','4','6','8','10']	30
