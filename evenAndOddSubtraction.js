function evenAndOddSubtraction(arr) {
let evenSum = 0;
let oddSum = 0;

for (const num of arr) {
    
    if (num % 2 === 0) {
        evenSum += num;
    } else {
        oddSum += num;
    }
}
let allSum = evenSum - oddSum;

console.log(allSum);
}
evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9])