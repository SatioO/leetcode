const arr = [
    [1, 4],
    [2, 3],
];

function mergeIntervals(arr) {
    const output = [];
    let j = -1;
    arr.sort((a, b) => a[0] - b[0]);

    for (let i in arr) {
        if (output.length === 0 || output[j][1] < arr[i][0]) {
            output.push(arr[i]);
            j++;
        } else {
            if (output[j][1] >= arr[i][0]) {
                if (output[j][1] < arr[i][1]) {
                    output[j][1] = arr[i][1];
                }
            }
        }
    }

    return output;
}
console.log(mergeIntervals(arr));
