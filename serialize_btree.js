class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

function serialise() {
    let string = '';

    function encode(root) {
        if (root === null) {
            string += 'null,';
        } else {
            string += root.data + ',';
            encode(root.left);
            encode(root.right);
        }
    }

    encode(root);

    return string;
}

function deserialise(str) {
    const nodes = str.split(',');
    function decode() {
        const node = nodes.shift();
        if (node === 'null') {
            return null;
        } else {
            const data = new Node(Number(node));
            data.left = decode();
            data.right = decode();
            return data;
        }
    }

    return decode();
}
const string = serialise();
console.log(string);
const tree = deserialise(string);
console.log(tree);
