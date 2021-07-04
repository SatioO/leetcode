let string = 'hello';

function reverse(str) {
    let newstring = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newstring += str[i];
    }

    return newstring;
}

console.log(reverse(string));
