const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const rotated = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
];

const N = matrix.length;

for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N / 2; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[i][N - 1 - j];
        matrix[i][N - 1 - j] = temp;
    }
}

console.log(matrix);
