let counter = 0;
function recursion() {
  if (counter > 3) {
    return "done";
  }
  counter++;
  return recursion();
}

console.log(recursion());
