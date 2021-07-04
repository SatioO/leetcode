class Node {
    left = null;
    right = null;

    constructor(val) {
        this.val = val;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

function inOrder(root) {
    const stack = [];
    const result = [];
    let curr = root;

    while (curr !== null || stack.length) {
        

        curr = stack.pop();
        result.push(curr);
        curr = curr.right;
    }

    return result;
}

console.log(inOrder(root));