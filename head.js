const assertEqual = function(actual, expected) {
  let returnString = '';

  if (actual === expected) {
    returnString = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    returnString = `😔 😔 Assertion Failed: ${actual} !== ${expected}`;
  }
  return console.log(returnString);
};

//An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head

const head = function(input) {
  let str = '';
  let num = 0;
  
  if (input.length === 1) {
    if (typeof input[0] === 'string') {
      str = input[0];
      return str;
    }
    
    if (typeof input[0] === 'number') {
      num = input[0];
      return num;
    }
  }
    
  if (typeof input[0] === 'string') {
    return str = input[0];
  }
  
  if (typeof input[0] === 'number') {
    return num = input[0];
  }

};


//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 9);