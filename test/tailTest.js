// const assertArraysEqual = require('../assertArraysEqual');
// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertArraysEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertArraysEqual(result[1], "Labs"); // ensure second element is "Labs"


// // Test Case 2: Check the original array.
// const words = ['Yo Yo', 'Lighthouse', 'Labs'];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array still have 3 elements!

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Labs']);
  });

  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Labs'])
  });
});