//const assertEqual = require('./assertEqual');

//eqArrays to not return true for nested arrays or arrays of objects that are identical.
const eqArrays = function(arr1, arr2) {
  let b1 = false;
  let arr1Len = arr1.length;
  let arr2Len = arr2.length;

  if (arr1Len === arr2Len) {
    if (arr1.every((curArr1Element, currArr1Index) => curArr1Element === arr2[currArr1Index])) {
      b1 = true;
    }
  }
  return b1;
};

module.exports = eqArrays;
