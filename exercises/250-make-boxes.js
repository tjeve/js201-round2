// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(size) {
    let star = '*'
    let newLine = '/n'
    let line = []
    let lineStr
    let square = []
    let squareStr
    
    for(let i = 0; i < size*size; i++) {
      line.push(star)
      if(line.length === size + 1) {
        line.push('\n')
        lineStr = line.join('')
      }
      
    }
    for(let j = 0; j < size; j++) {
        square.push(lineStr)
        if(square.length === size) {
          console.log(square.join(''))
          let squareStr = square.join('')
        }
      }
    
    return squareStr

}

makeSquare(5)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox() {

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner() {

}