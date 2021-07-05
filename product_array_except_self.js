const nums = [1, 2, 3, 4];

/**
 * t = 1, ans: 1
 * t = 1, ans: 2
 *
 *
 */
function ProductArray() {
    let t = 1;
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        result[i] = t;
        t *= nums[i];
    }

    let k = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= k;
        k *= nums[i];
    }

    return result;
}

ProductArray();
