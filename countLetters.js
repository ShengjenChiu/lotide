// const assertEqual = function(actual, expected) {
//   let returnString = '';

//   if (actual === expected) {
//     returnString = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
//   } else {
//     returnString = `😔 😔 Assertion Failed: ${actual} !== ${expected}`;
//   }
//   return console.log(returnString);
// };

const countLetters = function(inStr) {
  let returnObj = {};
  let newStr = '';

  for (let i = 0; i < inStr.length; i++) {
    if (inStr[i] !== ' ') {
      newStr += inStr[i];
    }
  }

  for (const c of newStr) {
    if (returnObj[c]) {
      returnObj[c]++;
    } else {
      returnObj[c] = 1;
    }
  }
  
  return console.log(returnObj);
};

countLetters("lighthouse in the house");