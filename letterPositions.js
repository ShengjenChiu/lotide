const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];

    if (key === ' ') {
      continue;
    } else if (results[key] === undefined) {
      results[key] = [i];
    } else {
      results[key].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;

assertArraysEqual(letterPositions("hello").e, [1]);
//Test Code
//Write a test with a small string (eg: "hello")
//("lighthouse in the house")
/*
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/
