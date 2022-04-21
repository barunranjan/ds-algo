// Q. Write a function to reverse a stringMaster the Coding Interview_ Data Structures + Algorithms _ Udemy
const reverseText = (text) => {
  let reverseString = [];
  for (let i = text.length - 1; i >= 0; i--) {
    reverseString.push(text[i]);
  }
  return reverseString.join("");
};

const reverseTextShort = (text) => {
  return text.split("").reverse().join("");
};

console.log(reverseTextShort("hello this is a new world"));
