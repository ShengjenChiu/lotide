const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, val) {
  let returnString = '';

  for (const key in obj) {
    if (val === obj[key]) {
      returnString = key;
      break;
    }
    returnString = undefined;
  }
  return returnString;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);