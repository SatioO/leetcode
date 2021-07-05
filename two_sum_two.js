const arr = [3, 4, 5, 11, 15];
const target = 9;

function TwoSum() {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        const sum = arr[i] + arr[j];

        if (target === sum) {
            return [i, j];
        }

        if (sum > target) {
            j--;
        } else {
            i++;
        }
    }

    return [];
}

console.log(TwoSum());
