// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
function leetspeak (str) {
    let strArr = str.split('')
    let leet = []

    let convtable = {
        A: 4,
        E: 3,
        G: 6,
        I: 1,
        O: 0,
        S: 5,
        T: 7,
    }

    strArr.forEach(char => {
        if (Object.keys(convtable).includes(char.toUpperCase())) {
            leet.push(convtable[char.toUpperCase()])
        } else {
            leet.push(char.toLowerCase())
        }
    })
    return leet.join('')
}


// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"
