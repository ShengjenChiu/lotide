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


//without() to not function correctly when using nested arrays or arrays of objects
const without = function(soArr, iToReArr) {
  let returnedArr = [];

  for (let i = 0; i < iToReArr.length; i++) {
    returnedArr = soArr.filter(soElem => {
      return soElem !== iToReArr[i];
    });
  }
  return console.log(returnedArr);
};


//Test Code
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];

// no need to capture return value for this test case
without(words, ["lighthouse"]);

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);