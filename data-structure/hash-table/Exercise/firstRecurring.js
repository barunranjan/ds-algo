let array1 = [5, 1, 3, 1, 2, 4];
let array2 = [3, 5, 1, 3, 1, 2, 4];

const firstReccuring = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return `first recurring is ${array[i]}`;
      }
    }
  }
  return "Not any reccuring";
}; //o(n^2)
console.log(firstReccuring(array1));

const firstReccuring2 = (array) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== undefined) {
      return `first reccuring is ${array[i]}`;
    } else {
      map[array[i]] = i;
    }
    console.log(map);
  }
  return "not any";
};

console.log(firstReccuring2(array2));
