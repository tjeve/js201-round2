// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

function longLongVowels (str) {
    let chars = str.split('')
    let newStrArr = []
    let vowels = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < chars.length; i++) {
        let char = chars[i]
        let nextChar = chars[i + 1]

        if (vowels.includes(char) === true && char === nextChar) {
            newStrArr.push(char)
            newStrArr.push(char)
            newStrArr.push(char)
            newStrArr.push(char)
            newStrArr.push(char)
            i += 1  
        } else {
            newStrArr.push(char)
        }
    }
        let newStr = newStrArr.join('')
    return newStr
}