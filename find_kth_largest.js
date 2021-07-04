function k_largest(nums, k) {
    k = nums.length - k;
    let lo = 0;
    let hi = nums.length - 1;

    while (lo < hi) {
        let j = partition(nums, lo, hi);
        if (j < k) {
            lo = j + 1;
        } else if (j > k) {
            hi = j - 1;
        } else {
            break;
        }
    }

    return nums[k];
}

function partition(a, lo, hi) {
    let i = lo;
    let j = hi + 1;

    while (true) {
        while (i < hi && less(a[++i], a[lo])) {}
        while (j > lo && less(a[lo], a[--j])) {}

        if (i >= j) {
            break;
        }

        exch(a, i, j);
    }
    exch(a, lo, j);
    return j;
}

function exch(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function less(a, b) {
    return a < b;
}

console.log(k_largest([2, 7, 5, 3, 9, 4], 3));
