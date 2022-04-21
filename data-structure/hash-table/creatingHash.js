class hashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(k, v) {
    let address = this._hash(k);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([k, v]);
    console.log(this.data);
  }
  get(k) {
    let address = this._hash(k);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === k) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}
const myHashTable = new hashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("grapess", 10000);
myHashTable.get("grapes");
