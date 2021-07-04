const items = [
    [1, 91],
    [1, 92],
    [2, 93],
    [2, 97],
    [1, 60],
    [2, 77],
    [1, 65],
    [1, 87],
    [1, 100],
    [2, 100],
    [2, 76],
];

function highFive(items) {
    const hash = {};

    for (let i = 0; i < items.length; i++) {
        const student = items[i];
        if (!hash[student[0]]) {
            hash[student[0]] = student[1];
        } else {
            hash[student[0]] += student[1];
        }
    }

    console.log(hash);
}

highFive(items);
