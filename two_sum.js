const arr = [7, 4, 2, 11];
const n = 9;

// {
//     7: 0,
//     4: 1,

// }

const hash = {};

function TwoSum() {
    for (let i = 0; i < arr.length; i++) {
        let target = n - arr[i];
        if (hash[target] !== undefined) {
            return [hash[target], i];
        }

        hash[arr[i]] = i;
    }
}

console.log(TwoSum());
