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
    this.head = new Node(data, this.head);
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
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;

    while (node) {
      if (!node.next) return node;

      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return; // empty list

    if (!this.head.next) {
      this.head = null;
      return;
    } // list with one node

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast(); // get the last node
    if (last)
      last.next = new Node(data); // there are some existing nodes in our chain
    else this.head = new Node(data); // the chain is empty
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
}

module.exports = { Node, LinkedList };
