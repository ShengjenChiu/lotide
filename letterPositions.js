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


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];

    if (key === ' ') {
      continue;
    } else if (results[key] === undefined) {
      results[key] = [i];
    } else {
      results[key].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
//Test Code
//Write a test with a small string (eg: "hello")
//("lighthouse in the house")
/*
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/
