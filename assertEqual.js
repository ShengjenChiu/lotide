//Function implementation
const assertEqual = function(actual, expected) {
  let returnString = '';

  if (actual === expected) {
    returnString = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    returnString = `😔 😔 Assertion Failed: ${actual} !== ${expected}`;
  }
  return console.log(returnString);
};

module.exports = assertEqual;