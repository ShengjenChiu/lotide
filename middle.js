// TEST/ASSERTION FUNCTIONS
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

const assertArraysEqual = function(actual, expected) {
  let returnString = '';

  if (eqArrays(actual, expected)) {
    returnString = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    returnString = `😔 😔 Assertion Failed: ${actual} !== ${expected}`;
  }
  return console.log(returnString);
};



//Implement middle which will take in an array and return the middle-most element(s) of the given array.
// ACTUAL FUNCTION
const middle = function(array) {
  let arrLen = array.length;
  let reIndexOdd = 0;
  let reIndexEven2 = 0;
  let returnArr = [];

  //For arrays with one or two elements, return an empty array.
  if (arrLen <= 2) {
    return returnArr;
  }

  //For arrays with odd number of elements, return a single middle element.
  if (arrLen % 2 !== 0) {
    let rem = arrLen % 2;
    reIndexOdd = (arrLen - rem) / 2;
    returnArr.push(array[reIndexOdd]);
  }

  //For arrays with an even number of elements, return the two elements in the middle.
  if (arrLen % 2 === 0) {
    reIndexEven2 = arrLen / 2;  //The second index number of the two middle element.
    returnArr.push(array[reIndexEven2 - 1]);
    returnArr.push(array[reIndexEven2]);
  }

  return returnArr;
};


//Test Code, test assertion for various scenarios with middle
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);