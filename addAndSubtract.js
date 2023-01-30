function addAndSubtract(arr) {
    let oldSum = 0;
    let newSum = 0;

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        oldSum += num;
        if (num % 2 === 0) {
            let even = num + i;
            newSum += even;
            let n1 = newArr.push(even)
        } else {
            let odd = num - i;
            newSum += odd;
            let n2 = newArr.push(odd);
        }
    }
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubtract([-5, 11, 3, 0, 2]);