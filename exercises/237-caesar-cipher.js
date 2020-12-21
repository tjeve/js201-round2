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

    /*
        1. Iterate through the string passed into cipher
        2. for each char, loop through the letters array to
          find a match.
        3. When match found, return the index of that letter
        4. Then add the shift to the index of the letters array,
          making sure that it loops back on itself after 'z'.
        5. Push that letter to the coded Arr
      */

    for (let i = 0; i < str.length; i++) {
        //char comes from strArr, but shiftedChar should come from letters
        let char = strArr[i].toLowerCase()
        console.log('char: ', char)
        let shiftedChar
        console.log('shiftedChar: ', shiftedChar)

        letters.forEach((letter, idx) => {
            if (char === letter) {
                shiftedChar = strArr[idx + shift]
            }
        })

        let char = strArr[i].toLowerCase()
        console.log('char: ', char)
        let shiftedChar = ''
        console.log('shiftedChar: ', shiftedChar)

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
