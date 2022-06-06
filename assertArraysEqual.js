const eqArrays = require('./eqArrays');


const assertArraysEqual = function(array1, array2) {
  let returnString = '';

  if (eqArrays(array1, array2)) {
    returnString = `😀 😀 Assertion Passed: ${array1} === ${array2}`;
  } else {
    returnString = `😔 😔 Assertion Failed: ${array1} !== ${array2}`;
  }
  return console.log(returnString);
};

module.exports = assertArraysEqual;

//Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);