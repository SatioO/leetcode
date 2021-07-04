const word1 = ['ab', 'c'];
const word2 = ['a', 'bc'];

function arrayStringsAreEqual(word1, word2) {
    let idx1 = 0;
    let idx2 = 0;
    let arrIdx1 = 0;
    let arrIdx2 = 0;

    while (arrIdx1 < word1.length && arrIdx2 < word2.length) {
        if (word1[arrIdx1][idx1] !== word2[arrIdx2][idx2]) {
            return false;
        }

        if (idx1 < word1[arrIdx1].length - 1) {
            idx1++;
        } else {
            arrIdx1++;
            idx1 = 0;
        }

        if (idx2 < word2[arrIdx2].length - 1) {
            idx2++;
        } else {
            arrIdx2++;
            idx2 = 0;
        }
    }

    return arrIdx1 === word1.length && arrIdx2 === word2.length;
}

console.log(arrayStringsAreEqual(word1, word2));
