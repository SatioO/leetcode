function climbStairs(n) {
    let arr = [];

    arr[0] = 1;
    arr[1] = 1;

    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    console.log(arr);
    return arr[n];
}

console.log(climbStairs(10));
