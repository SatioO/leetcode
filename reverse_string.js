// let string = 'hello';

// function reverse(str) {
//     let newstring = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         newstring += str[i];
//     }

//     return newstring;
// }

// console.log(reverse(string));

let string = 'hello';

string = string.split('');

let l = 0;
let r = string.length - 1;

while (l < r) {
    let temp = string[l];
    string[l++] = string[r];
    string[r--] = temp;
}

console.log(string.join(''));
