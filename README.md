# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shengchiu/lotide`

**Require it:**

`const _ = require('@shengchiu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(input)`: return the first element of an array
* `tail(array)`: return the last element of an array
* `middle(array)`: return the middle element(s) of an array

* `countOnly(allItems, itemsToCount)`: return the number of occurance for the input item appear in the object.
* `countLetters(inStr)`: return an object of character with its number of occurance from an input string.
* `letterPositions(sentence)`: return the specific location of the specified character of the input string

* `findKey(obj, callback)`: return the first key of the object which specified by the callback.
* `findKeyByValue(obj, val)`: return key from an object with key's value.

* `map(array, callback)`: return an array of specified string item(s) taken from an input string array.
* `takeUntil(array, callback)`: return an array of item(s) continuously taken from an input array until a specified stop condition.
* `without(soArr, iToReArr)`: return an array with item(s) from an input array that is (are) other than the specified one. 