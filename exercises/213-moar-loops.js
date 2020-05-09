// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Complete the removeZAnimals function as described below:

function removeZAnimals () {
  // 1) declare an array with some strings
  const animals = ["alligator", "zebra", "crocodile", "giraffe"]

  // create an empty array (we will fill this with strings from the previous array)
  let animalsWithoutZ = []

  // 2) loop through "animals"
for (let idx = 0; idx < animals.length; idx++) {
  if (animals[idx].search('z') === -1) {
    animalsWithoutZ.push(animals[idx])
  }
}
  // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name
  //    contains the letter "z"
  //    HINT: remember you can search within a string

  // 4) return "animalsWithoutZ"
return animalsWithoutZ
}

removeZAnimals()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeAnyWordWithZ" that takes 1 argument: an array of strings
// It should return a new array that has all of the items in the passed-in array minus
// any words that contain the letter 'z' or 'Z' (case-insensitive)
function removeAnyWordWithZ (array) {

    let accumulator = []
  
    // 2) loop through "animals"
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx].toLowerCase().search('z') === -1) {
      accumulator.push(array[idx])
    }
  }
    // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name
    //    contains the letter "z"
    //    HINT: remember you can search within a string
  
    // 4) return "animalsWithoutZ"
  return accumulator
  }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeWordsWithChar" that takes 2 arguments:
// 1) an array of strings
// 2) a string of length 1 (ie: a single character)
// It should return a new array that has all of the items in the first argument
// except those that contain a character in the second argument (case-insensitive).
//
// Examples:
// removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b') --> ['aaa', 'ccc']
// removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E') --> ['pizza']
function removeWordsWithChar (array, character) {
  if (character.length === 1 ) {

      let accumulator = []

    for (let idx = 0; idx < array.length; idx++) {
      if (array[idx].toLowerCase().search(character.toLowerCase()) === -1) {
        accumulator.push(array[idx])
      }
    }
    return accumulator
    }
}
// does this work?

// removeWordsWithChar (["pizza", "toast", "eggs"], "z")
