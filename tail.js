//An array with only one element should yield an empty array for its tail
//An empty array should yield an empty array for its tail
const tail = function(arr) {
  let returnArr = [];
  let tIn = arr.length - 1;

  if (arr.length === 0 || arr.length === 1) {
    return returnArr;
  }

  returnArr.push(arr[tIn]);

  return returnArr;
};

module.exports = tail;
