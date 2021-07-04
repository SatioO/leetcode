let arr = [
    [0, '', 0, '', 0, 0],
    [0, '', 0, 0, '*', ''],
];

for (let r = 0; r < arr.length; r++) {
    for (let c = arr[r].length - 1; c >= 0; c--) {
        if (arr[r][c] === 0) {
            let j = c + 1;
            let k = c;
            while (arr[r][j] === '') {
                let temp = arr[r][k];
                arr[r][k++] = arr[r][j];
                arr[r][j++] = temp;
            }
        }
    }
}

console.log(arr);
