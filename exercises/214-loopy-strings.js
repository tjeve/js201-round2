// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse (string) {
    let newString = ''
    for (let idx = string.length; idx >= 0; idx--) {
        newString += string.charAt(idx)
    }
    return newString
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord (string) {
    let array = string.split(' ')
    let longestWord = ''
    for (let idx = 0; idx < array.length; idx++) {

      let currentWord = array[idx]
      if ( currentWord.length > longestWord.length) {

        longestWord = currentWord
      }
    }
    return longestWord
  }
  
  findLongestWord("I went to a chinese restaurant")
    

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
function nicer (string) {
    let badWords = {
      "heck": "heck", 
      "darn": "darn", 
      "dang": "dang", 
      "crappy": "crappy"
      }
    let array = string.split(' ')
    let newArray = []
    for (let idx = 0; idx < array.length; idx++) {
      const currentWord = array[idx]
      if (currentWord !== badWords[currentWord]) {
        newArray.push(currentWord)
      }
    }
    const newString = newArray.join(' ')
    return newString
}



 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll (string) {
    const array = string.split(' ')
    const newArray = []
    for (let idx = 0; idx < array.length; idx++) {
      let currentWord = array[idx]
      const capFirstLetter = currentWord.charAt(0).toUpperCase()
      const restOfWord = currentWord.slice(1, currentWord.length)
      let capWord = capFirstLetter.concat(restOfWord)
      newArray.push(capWord)
    }
    const newString = newArray.join(' ')
    return newString
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

function split (string, delimiter) {
  
    const accumulator = []
    for (let idx = 0; idx < string.length; idx++) {
        console.log(string[idx])
        const char = string[idx]
        if (char === delimiter.charAt(0)) {
          
        }
    }
    return null
}
split("I want this sentence to be split")