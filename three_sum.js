const nums = [-1, 0, 1, 2, -1, -4];

function ThreeSum() {
    nums = nums.sort((a, b) => a - b);
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i - 1] !== nums[i]) {
            TwoSum(nums, i, output);
        }
    }

    return output;
}

function TwoSum(nums, i, output) {
    let lo = i + 1;
    let hi = nums.length - 1;

    while (lo < hi) {
        const sum = nums[i] + nums[lo] + nums[hi];

        if (sum < 0) {
            lo++;
        } else if (sum > 0) {
            hi--;
        } else {
            output.push([nums[i], nums[lo++], nums[hi--]]);
            while (lo < hi && nums[lo] == nums[lo - 1]) ++lo;
        }
    }
}

console.log(ThreeSum());
