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

// const queue = [root];

// while (queue.length > 0) {
//     let n = queue.length;
//     let first = true;
//     while (n > 0) {
//         const current = queue.shift();

//         if (first) {
//             console.log(current.data);
//             first = false;
//         }

//         if (current.left) {
//             queue.push(current.left);
//         }

//         if (current.right) {
//             queue.push(current.right);
//         }

//         n--;
//     }
// }
let g = [];
let maxLevel = -1;
function levelOrder(root, level) {
    if (root === null) {
        return;
    }

    if (maxLevel < level) {
        g.push(root.data);
        maxLevel = level;
    }
    levelOrder(root.left, level + 1);
    levelOrder(root.right, level + 1);
}

levelOrder(root, 0);
console.log(g);
