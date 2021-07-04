class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}
// queue: 4,5,6,7
// take: 1,2,4,6
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

function rightSideView(root) {
    const queue = [root];

    while (queue.length !== 0) {
        let size = queue.length;

        while (size > 0) {
            const node = queue.pop();

            if (size === 1) {
                console.log(node.data);
            }

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
            size--;
        }
    }
}

rightSideView(root);
