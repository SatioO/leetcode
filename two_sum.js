const arr = [7, 4, 2, 11];
const n = 9;

const hash = {};

function TwoSum() {
    for (let i = 0; i < arr.length; i++) {
        const diff = n - arr[i];
        if (hash[arr[i]] != undefined) {
            return [hash[arr[i]], i];
        }

        hash[diff] = i;
    }
}

console.log(TwoSum());
