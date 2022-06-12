const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual;

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