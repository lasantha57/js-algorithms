function BFS() {
    let visited = [],
        queue = [],
        current = this.root;

    queue.push(current);
    while (queue.length) {
        current = queue.shift();
        visited.push(current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    };

    return visited;
}

console.log(tree.BFS());

function preOrder() {
    let visited = [],
        current = this.root;

    let traverse = node => {
        visited.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
}

console.log(tree.preOrder());

function postOrder() {
    let visited = [],
        current = this.root;

    let traverse = node => {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.val);
    };

    traverse(current);
    return visited;
}

console.log(tree.postOrder());

function inOrder() {
    let visited = [],
        current = this.root;

    let traverse = node => {
        if (node.left) traverse(node.left);
        visited.push(node.val);
        if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
}

console.log(tree.inOrder());