const arr = [7, 1, 5, 3, 6, 4];

function BestTime() {
    let min = arr[0];
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] - min > max) {
            max = arr[i] - min;
        }
    }

    return max;
}

console.log(BestTime());
