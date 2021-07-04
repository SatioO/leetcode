const x = 10;

let start = 1;
let end = x;
let ans = 0;
while (start <= end) {
    let mid = parseInt(start + (end - start) / 2);

    if (mid * mid <= x) {
        ans = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(ans);
