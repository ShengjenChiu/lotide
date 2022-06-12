const assertArraysEqual = require('./assertArraysEqual');


const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["Jesus", "Christ", "my", "precious", "Lord"];
const words3 = ["oh", "Lord", "Amen", "Halleluah"];

const map = function(array, callback) {
  const results = [];
  
  for (const item of array) {
    results.push(callback(item));
  }
  
  return results;
};


module.exports = map;


//Different testing scenarios
const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words2, word => word[0]);
console.log(results2);

const results3 = map(words3, word => word[0]);
console.log(results3);



//Test Code
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ['J', 'C', 'm', 'p', 'L']);
assertArraysEqual(results3, ['o', 'L', 'A', 'H']);