// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    //recursive solution
    if (data < this.data && this.left) {
      // if data is less than the current node's data and there is a left node
      this.left.insert(data); // call insert on the left node
    } else if (data < this.data) {
      // if data is less than the current node's data and there is no left node
      this.left = new Node(data); // create a new node with the data and assign it to the left node
    } else if (data > this.data && this.right) {
      // if data is greater than the current node's data and there is a right node
      this.right.insert(data); // call insert on the right node
    } else if (data > this.data) {
      // if data is greater than the current node's data and there is no right node
      this.right = new Node(data); // create a new node with the data and assign it to the right node
    }
  }

  contains(data) {
    if (data === this.data) {
      // if the data is equal to the current node's data
      return this; // return the current node
    }

    if (data < this.data && this.left) {
      // if data is less than the current node's data and there is a left node
      return this.left.contains(data); // call contains on the left node
    } else if (data > this.data && this.right) {
      // if data is greater than the current node's data and there is a right node
      return this.right.contains(data); // call contains on the right node
    }

    return null; // if the data is not found, return null
  }
}

module.exports = Node;
