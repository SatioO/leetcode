class TreeNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

const head = new TreeNode(1);
head.next = new TreeNode(2);
head.next.next = new TreeNode(3);
head.next.next.next = new TreeNode(4);

// const stack = [];
// let node = head;
// while (node) {
//     stack.push(node);
//     node = node.next;
// }

// let dummy = new TreeNode(-1);
// let head1 = dummy;
// while (stack.length) {
//     let current = stack.pop();
//     head1.next = new TreeNode(current.value);
//     head1 = head1.next;
// }

// console.log(dummy.next);

let prev = null;
let current = head;

while (current) {
    let next_node = current.next;
    current.next = prev;
    prev = current;
    current = next_node;
}
console.log(prev);
