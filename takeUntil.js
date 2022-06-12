const assertArraysEqual = require('./assertArraysEqual');


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

module.exports = takeUntil;

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