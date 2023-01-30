function reverseAnArrayOfNumbers(rev, arr) {
    let final = [];
    for (let i = Number(rev - 1); i >= 0; i--) {
        final.push(Number(arr[i]))
    }
    console.log(final.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);