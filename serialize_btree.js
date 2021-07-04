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
root.right.left = new Node(4);
root.right.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

function serialize() {
    let string = '';

    function encode(node) {
        if (!node) {
            string += 'e ';
        } else {
            string += node.data + ' ';
            encode(node.left);
            encode(node.right);
        }
    }

    encode(root);
    return string;
}

function deserialize(data) {
    let nodes = data.split(' ');
    function decode() {
        let val = nodes.shift();
        if (val === 'e') {
            return null;
        }

        let node = new Node(Number(val));
        node.left = decode();
        node.right = decode();
        return node;
    }

    return decode();
}

const serialized = serialize();
console.log(serialized);
console.log(deserialize(serialized));
