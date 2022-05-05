const iterativeFactorial = (num) => {
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
};
// console.log(iterativeFactorial(5));

const recursiveFactorial = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return num * recursiveFactorial(num - 1);
  }
};
console.log(recursiveFactorial(5));
