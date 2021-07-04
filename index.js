/* 
        1
     2      3
   4   5  6  7
*/

// preorder: NLR: 1,2,4,5,3,6,7
// inorder: LNR: 4,2,5,1,6,3,7
// postorder: LRN: 4,5,2,6,7,3,1

function inOrder(root) {
    if (root === null) return;

    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
}

function preOrder(root) {
    if (root === null) return;

    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}

function postOrder(root) {
    if (root === null) return;

    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
}

function Node(data) {
    this.left = null;
    this.data = data;
    this.right = null;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

inOrder(root);
