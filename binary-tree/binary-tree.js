/**
 *
 */
/**
 * Represents a binary tree data structure.
 * @class BinaryTree
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
    if (this.contains(data)) return false;

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

  remove(data) {
    if (!this.contains(this.root, data)) return false;

    this.root = this.root && this.root.remove(data);
    this._nodeCount--;
    return true;
  }

  contains(data) {
    return this._contains(this.root, data);
  }

  _contains(node, data) {
    if (node === null) return false;

    if (data < node.data) {
      return this._contains(node.left, data);
    } else if (data > node.data) {
      return this._contains(node.right, data);
    } else {
      return true;
    }
  }
}

class Node {
  constructor(left, right, data) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  remove(data) {
    if (data < this.data) {
      this.left = this.left && this.left.remove(data);
    } else if (data > this.data) {
      this.right = this.right && this.right.remove(data);
    } else if (this.left && this.right) {
      this.data = this._findMin(this.right);
      this.right = this.right.remove(this.data);
    } else {
      return this.left || this.right;
    }
    return this;
  }

  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }
}