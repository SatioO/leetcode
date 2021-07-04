const arr = [3, 4, 5, 6, 7, 0, 1, 2];

let l = 0;
let r = arr.length - 1;
let target = 5

while (l < r) {
    let mid = parseInt(l + (r - l) / 2);
    if (arr[mid] > arr[r]) {
        l = mid + 1;
    } else {
        r = mid;
    }
}

let start = l;
l = 0;
r = 
console.log({ l, r, t: target > arr[l]});
