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

function BFS() {
    const queue = [];
    queue.push(root);
    while (queue.length) {
        let size = queue.length;

        while (size > 0) {
            const current = queue.shift();

            console.log(current.data);

            if (current.left) {
                queue.push(current.left);
            }

            if (current.right) {
                queue.push(current.right);
            }

            size--;
        }
    }
}

BFS();
