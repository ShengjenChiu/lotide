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

//TEST CODE
//Comparing identical strings
assertEqual("Bootcamp", "Bootcamp");

//Comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");

//Comparing identical numbers
assertEqual(1, 1);

//Comparing non-identical numbers
assertEqual(1, 700);