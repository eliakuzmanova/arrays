function condense(nums) {
    let cond = [];
    while (nums.length > 1) {
        cond = [];
        for (let i = 0; i < nums.length - 1; i++) {
            let num1 = Number(nums[i])
            for (let y = i + 1; i < nums.length; y++) {
                let num2 = Number(nums[y])
                cond.push(num1 + num2)
                break;
            }
        }
        nums = cond
    }
    console.log(Number(nums));

}
condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
condense([1]);