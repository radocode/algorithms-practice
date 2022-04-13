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
    // we insert this new node to the beginning of the list and link the node that was thete before into the next, by
    //  simply creating a new node and setting the "next" parameter to the previous head we had
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
    let node = this.head;
    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next; // since next could be null when reaching the end, we are essentially removing the first node by replacing it with its next one
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      //we only need to check for the next node each time
      previous = node; //then we get the current node
      node = node.next; // and also we get the incoming node
    }
    previous.next = null; //and for this method to do what is intended, we only need to assign null to the .next value of the previous reference
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index){
    let counter = 0;
    let node = this.head;
    while (node) {
      if(index === counter)
        return node
      counter++;
      node = node.next;
    }
    return null
  }
}

module.exports = { Node, LinkedList };
