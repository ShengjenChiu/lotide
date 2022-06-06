//Implement middle which will take in an array and return the middle-most element(s) of the given array.
// ACTUAL FUNCTION
const middle = function(array) {
  let arrLen = array.length;
  let reIndexOdd = 0;
  let reIndexEven2 = 0;
  let returnArr = [];

  //For arrays with one or two elements, return an empty array.
  if (arrLen <= 2) {
    return returnArr;
  }

  //For arrays with odd number of elements, return a single middle element.
  if (arrLen % 2 !== 0) {
    let rem = arrLen % 2;
    reIndexOdd = (arrLen - rem) / 2;
    returnArr.push(array[reIndexOdd]);
  }

  //For arrays with an even number of elements, return the two elements in the middle.
  if (arrLen % 2 === 0) {
    reIndexEven2 = arrLen / 2;  //The second index number of the two middle element.
    returnArr.push(array[reIndexEven2 - 1]);
    returnArr.push(array[reIndexEven2]);
  }

  return returnArr;
};

module.exports = middle;
