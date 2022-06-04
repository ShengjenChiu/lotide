const assertEqual = function(actual, expected) {
  let returnString = '';

  if (actual === expected) {
    returnString = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    returnString = `😔 😔 Assertion Failed: ${actual} !== ${expected}`;
  }
  return console.log(returnString);
};

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
  let bool = false;

  if (numKey1 === numKey2) {
    if (object1.a === object2.a && object1.b === object2.b) {
      bool = true;
    }
    
    if (object1.c === object2.c) {
      let isArray1 = Array.isArray(object1.d);
      let isArray2 = Array.isArray(object2.d);

      if (isArray1 && isArray2) {
        bool = (eqArrays(object1.d, object2.d));
        return bool;
      }

      if (object1.d === object2.d) {
        bool = true;
      }

    }
  }
  return bool;
};

//Primitives as values.
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);


//Arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);