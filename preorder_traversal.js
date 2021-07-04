const arr = [1, null, 2, 3];

class Node {
    left = null;
    right = null;
    val = null;
    constructor(val) {
        this.val = val;
    }
}

const root = new Node(1);
root.right = new Node(2);
root.right.left = new Node(3);

const output = [];

function preorder(root) {
    if (root === null) return;

    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

preorder(root);
