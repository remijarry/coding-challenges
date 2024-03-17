/**
 *
 */
class BinaryTree {
  constructor() {
    this.root = null;
    this._nodeCount = 0;
  }

  isEmpty() {
    return size() === 0;
  }

  size() {
    return (this._nodeCount = 0);
  }

  add(data) {
    if (this.contains(this.root, data)) return false;

    console.log("hi");
    this.root = this._add(this.root, data);
    this._nodeCount++;
    return true;
  }

  _add(node, data) {
    if (node === null) {
        return new Node(null, null, data);
    }

    if (data < node.data) {
        node.left = this._add(node.left, data);
    } else {
        node.right = this._add(node.right, data);
    }

    return node;
  }

  contains(node, data) {
    if (node === null) return false;

    if (data < node.data) {
        return this.contains(node.left, data);
    } else if (data > node.data) {
        return this.contains(node.right, data);
    } else {
        return true;
    }
  }

  remove(data) {}

  update(data) {}

  search(data) {}

  dfs() {}

  bfs() {}
}

class Node {
    constructor(left, right, data) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
