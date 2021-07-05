const nums = [0, 1, 0, 5, 6, 12];
// 1, 0, 0, 5, 6, 12
// 1, 5, 0, 0, 6, 12
function MoveZeros() {
    let insertPos = 0;

    for (let num of nums) {
        if (num !== 0) {
            nums[insertPos++] = num;
        }
    }

    console.log(nums, insertPos);
}
MoveZeros();

console.log(nums);
