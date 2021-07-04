const arr = [1, 2, 3];

const result = [];
result.push([]);

for (let i = 0; i < arr.length; i++) {
    let size = result.length;

    for (let j = 0; j < size; j++) {
        const subset = [...result[j]];
        subset.push(arr[i]);
        result.push(subset);
    }
}

// console.log(result);
