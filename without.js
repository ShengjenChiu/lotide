const assertArraysEqual = require('./assertArraysEqual');


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

module.exports = without;

//Test Code
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];

// no need to capture return value for this test case
without(words, ["lighthouse"]);

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);