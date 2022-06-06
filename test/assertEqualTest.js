const assertEqual = require('../assertEqual');

//TEST CODE
//Comparing identical strings
assertEqual("Bootcamp", "Bootcamp");

//Comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");

//Comparing identical numbers
assertEqual(1, 1);

//Comparing non-identical numbers
assertEqual(1, 700);