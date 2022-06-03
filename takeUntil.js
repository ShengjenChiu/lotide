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


const takeUntil = function(array, callback) {
  let returnArr = [];

  if (array.length !== 0) {
    for (const item of array) {
      if (!callback(item)) {
        returnArr.push(item);
      } else {
        break;
      }
    }
  }

  return returnArr;
};


//Expected Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//Test Code
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);