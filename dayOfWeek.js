function dayOfWeek(num) {
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
if (num <= 7 && num >= 1) {
    for (let i = 0; i < days.length; i++) {
        if (i + 1 == num) {
            console.log(days[i]);
        }
    }
} else {
    console.log("Invalid day!");
}

}
dayOfWeek([3])
dayOfWeek([5])
dayOfWeek([0])
dayOfWeek([11])