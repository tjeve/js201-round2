// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
function max (array) {
    if (array.length === 0) {
        return 0
    } else {
        return Math.max(...array)
    }
}   



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers(arr){
    if (arr.length !== 0) {
        let sum = 0
        let add = (sum, nextVal = 0) => sum + nextVal
        sum = arr.reduce(add)
        return sum
    } else {
        return 0
    }
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
function positives (arr) {
    let newArr = []
    arr.forEach(num => {
        if(num > 0) {
            newArr.push(num)
        }
    })
    return newArr
}




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
function evens (arr) {
    let newArr = []
    arr.forEach(num => {
        if(num % 2 === 0) {
            newArr.push(num)
        }
    })
    return newArr
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
function odds (arr) {
    let newArr = []
    arr.forEach(num => {
        if(num % 2 !== 0) {
            newArr.push(num)
        }
    })
    return newArr
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
function integers (arr) {
    let newArr = []
    arr.forEach(num => {
        if(num % 1 === 0) {
            newArr.push(num)
        }
    })
    return newArr
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance (arr) {
    let squares = []
    arr.forEach(num => {
            squares.push(num * num)
    })
    return squares
}