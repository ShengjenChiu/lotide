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

const assertArraysEqual = function(array1, array2) {
  let returnString = '';

  if (eqArrays(array1, array2)) {
    returnString = `😀 😀 Assertion Passed: ${array1} === ${array2}`;
  } else {
    returnString = `😔 😔 Assertion Failed: ${array1} !== ${array2}`;
  }
  return console.log(returnString);
};


const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["Jesus", "Christ", "my", "precious", "Lord"];
const words3 = ["oh", "Lord", "Amen", "Halleluah"];

const map = function(array, callback) {
  const results = [];
  
  for (const item of array) {
    results.push(callback(item));
  }
  
  return results;
};

//Different testing scenarios
const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words2, word => word[0]);
console.log(results2);

const results3 = map(words3, word => word[0]);
console.log(results3);



//Test Code
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ['J', 'C', 'm', 'p', 'L']);
assertArraysEqual(results3, ['o', 'L', 'A', 'H']);