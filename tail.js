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


//An array with only one element should yield an empty array for its tail
//An empty array should yield an empty array for its tail
const tail = function(arr) {
  let returnArr = [];
  
  if (arr.length === 0 || arr.length === 1) {
    return returnArr;
  }

  for (let i = 1; i < arr.length; i++) {
    returnArr.push(arr[i]);
  }
  return returnArr;
};

module.exports = tail;
