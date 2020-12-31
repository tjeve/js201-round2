// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(squareSize) {
  let square = ''
  let star = '*'

  for (let i = 0; i < squareSize; i++) {
      if (i < squareSize - 1) {
          square += star.repeat(squareSize) + '\n'
      }else square += star.repeat(squareSize)
  }
  return square
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(width, height) {
  let box = ''
  let star = '*'
  let space = ' '
  let newLine = '\n'
  
  for(let i = 0; i < height; i++){
    if(i === 0) { // If first Line
        box += star.repeat(width)
        console.log(box)
        console.log('---------------------------------')
      } else if (i === height - 1) { //If last line
        box += newLine + star.repeat(width)
        console.log(box)
        console.log('---------------------------------')
      } else { //If any other line
        box += newLine + star + space.repeat(width - 2) + star
        console.log(box)
        console.log('---------------------------------')
      }
      
    }
  return box
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

function makeBanner(text) {
  let width = text.length + 2
  let banner = ''
  let star = '*'
  let space = ' '
  let newLine = '\n'
  
  for(let i = 0; i < 3; i++){
    if(i === 0) { // If first Line
        banner += star.repeat(width + 2)
        console.log(banner)
        console.log('---------------------------------')
      } else if (i === 2) { //If last line
          banner += newLine + star.repeat(width + 2)
          console.log(banner)
          console.log('---------------------------------')
      } else { //If any other line
          banner += newLine + star + space + text + space + star
          console.log(banner)
          console.log('---------------------------------')
        }
      
    }
    
  return banner
}