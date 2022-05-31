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


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// Test Case 2: Check the original array.
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array still have 3 elements!