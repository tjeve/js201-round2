// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

function cipher (str, shift) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let letters = alphabet.split('')
    let strArr = str.split('')
    let codedArr = []
    
    //function for resetting the alphabet index
    let idxLoop = (idx, shift) => {
      let sum = idx + shift
      if(sum > 25) {
        return sum -= 26
      } else {
        return sum
      }  
    }
    
    //iterate through the string
    for(let i = 0; i < strArr.length; i++) {
      //defines the current char in the array
      let char = strArr[i].toLowerCase()
      console.log('char: ', char)
      let idxOfCharInLetters = letters.indexOf(char)
      console.log('idxOfCharInLetters: ', idxOfCharInLetters)
      let shiftedLetter = letters[idxLoop(idxOfCharInLetters, shift)]
      console.log('shiftedLetter: ', shiftedLetter)
      
      idxOfCharInLetters >= 0 ? codedArr.push(shiftedLetter) : codedArr.push(char)
     
      console.log('Return: ', codedArr.join(''))
      console.log('...................')
    }
    
    return codedArr.join('')
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'

function decipher (str, shift) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let letters = alphabet.split('')
    let strArr = str.split('')
    let codedArr = []
    
    //function for resetting the alphabet index
    let idxLoop = (idx, shift) => {
        let difference = idx - shift
        if(difference < 0) {
          return difference += 26
        } else {
          return difference
        }  
      }
    
    //iterate through the string
    for(let i = 0; i < strArr.length; i++) {
      //defines the current char in the array
      let char = strArr[i].toLowerCase()
      console.log('char: ', char)
      let idxOfCharInLetters = letters.indexOf(char)
      console.log('idxOfCharInLetters: ', idxOfCharInLetters)
      let shiftedLetter = letters[idxLoop(idxOfCharInLetters, shift)]
      console.log('shiftedLetter: ', shiftedLetter)
      
      idxOfCharInLetters >= 0 ? codedArr.push(shiftedLetter) : codedArr.push(char)
     
      console.log('Return: ', codedArr.join(''))
      console.log('...................')
    }
    
    return codedArr.join('')
}