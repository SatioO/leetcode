const arr = [4, 3, 2, 7, 8, 2, 3, 1];
const result = [];
for (let i = 0; i < arr.length; i++) {
    const index = Math.abs(arr[i]) - 1;
    if (arr[index] < 0) {
        result.push(Math.abs(arr[i]));
    }

    arr[index] = -arr[index];
}

console.log(result);
