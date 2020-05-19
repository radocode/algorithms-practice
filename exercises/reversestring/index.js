// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// node inspect index.js

// continue (or c)

// repl (to inspect variables)

function reverse(str) {
    // return str.split('').reduce((reversed, character) => {
    //    return character + reversed;
    // } , '');

    // debugger;
    return str.split('').reduce((rev, char) => char + rev, '')
}

// reverse('asdf');

module.exports = reverse;

// function reverse(str) {
//     return str.split('').reverse().join('');
// }


// function reverse(str) {
//     let reversed = '';

//     for (const character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }