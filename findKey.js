const assertEqual = require('./assertEqual');

const findKey = function(obj, callback) {
  let key = '';

  for (const k in obj) {
    if (callback(obj[k])) {
      key = k;
      break;
    }
    key = undefined;
  }

  return key;
};

module.exports = findKey;

//Test Code
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");