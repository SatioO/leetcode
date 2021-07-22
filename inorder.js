class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

function PreOrder(root) {
    const stack = [];
    const output = [];

    let cur = root;

    while (cur !== null || stack.length > 0) {
        while (cur !== null) {
            console.log(cur.val);
            output.push(cur.val);
            cur = cur.left;
        }

        cur = output.pop();
        cur = cur.right;
    }

    return output;
}

function InOrder(root) {
    const stack = [];
    const output = [];

    let cur = root;

    while (cur !== null || stack.length > 0) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }

        cur = stack.pop();
        output.push(cur.val);
        cur = cur.right;
    }

    return output;
}

console.log(PreOrder(root));
