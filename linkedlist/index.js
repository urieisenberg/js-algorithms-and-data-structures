// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) return null;

    // let node = this.head;

    // while (node) {
    //   if (!node.next) return node;

    //   node = node.next;
    // }

    // return node;
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // if (!this.head) return;

    // this.head = this.head.next;
    this.removeAt(0);
  }

  removeLast() {
    // if (!this.head) return; // empty list

    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // } // list with one node

    // let previous = this.head;
    // let node = this.head.next;

    // while (node.next) {
    //   previous = node;
    //   node = node.next;
    // }

    // previous.next = null;

    this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    // const last = this.getLast(); // get the last node
    // if (last)
    //   last.next = new Node(data); // there are some existing nodes in our chain
    // else this.head = new Node(data); // the chain is empty

    return this.insertAt(data, this.size());
  }

  getAt(index) {
    let counter = 0; // start at the head
    let node = this.head;

    // loop through the list
    while (node) {
      if (counter === index) return node; // if we've reached the index, return the node
      counter++; // otherwise, keep going
      node = node.next;
    }

    return null; // if we've reached the end of the list or the list is empty, return null
  }

  removeAt(index) {
    if (!this.head) return; // empty list - nothing to remove

    if (index === 0) {
      this.head = this.head.next;
      return;
    } // list with one node

    const previous = this.getAt(index - 1); // get the node before the one we want to remove
    if (!previous || !previous.next) return; // if there is no node before the one we want to remove, or there is no node after the one we want to remove, return
    previous.next = previous.next.next; // otherwise, set the next property on the previous node to skip over the node we want to remove
  }

  insertAt(data, index) {
    if (!this.head) {
      // empty list - insert at the beginning
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      // insert at the beginning of the list
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast(); // get the node before the index
    const node = new Node(data, previous.next); // create a new node
    previous.next = node; // set the next property on the previous node
  }
}

module.exports = { Node, LinkedList };
