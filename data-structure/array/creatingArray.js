class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastitem = this.data[this.length - 1];
    delete this.data.lastitem;
    this.length--;
    return lastitem;
  }
  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const newArr = new MyArray();
newArr.push("hello");
newArr.push("world");
newArr.push(2022);
newArr.delete(1);

console.log(newArr);
