const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
];

function MergeIntervals() {
    const output = [];
    let j = -1;

    for (let i = 0; i < intervals.length; i++) {
        if (output.length === 0 || output[j][1] <= intervals[i][0]) {
            output.push(intervals[i]);
            j++;
        } else {
            if (output[j][1] > intervals[i][0]) {
                output[j][1] = intervals[i][1];
            }
        }
    }

    return output;
}

console.log(MergeIntervals());
