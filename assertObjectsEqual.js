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

// Returns true if both objects have identical keys with identical values.
// and only for the primitive value scenario.
const eqObjects = function(object1, object2) {
  let numKey1 = Object.keys(object1).length;
  let numKey2 = Object.keys(object2).length;
  let Keys1 = Object.keys(object1);
  // let Keys2 = Object.keys(object2);

  if (numKey1 !== numKey2) {
    return false;
  }
  
  for (let key of Keys1) {
    let isArray1 = Array.isArray(object1[key]);
    let isArray2 = Array.isArray(object2[key]);

    if (isArray1 && isArray2) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
 
  return true;
};




// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  let returnString = '';

  if (actual === expected) {
    returnString = `😀 😀 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    returnString = `😔 😔 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }

  console.log(`Example label: ${inspect(actual)}`);
  return console.log(returnString);
};


//Test Code: Primitives as values.
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false);


//Arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false);