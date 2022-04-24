// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//       },
//     },
//   },
// };format

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      head: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  prepend(value) {
    const prevValue = {
      head: value,
      next: null,
    };
    prevValue.next = this.head;
    this.head = prevValue;
    return this;
  }
  insert(idx, value) {
    for (let i = 0; i < idx - 1; i++) {}
  }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.append(25);
myLinkedList.prepend(1);
console.log(myLinkedList);
