function GoodPairs(nums) {
    let counter = 0;
    let hash = {};

    for (let i of nums) {
        if (!hash[i]) {
            hash[i] = 1;
        } else {
            counter += hash[i];
            hash[i] += 1;
        }
    }

    return counter;
}

console.log(GoodPairs([1, 1, 1, 1]));
