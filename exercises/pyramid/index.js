// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  if (n === 0) return;
  const levels = Array.from({ length: n }, (_, index) => index + 1);
  levels.map(level => {
    const currLevel = new Array(level).fill('');
    currLevel[Math.ceil(currLevel.length / 2)] = '#';
    console.log(currLevel);
  });

}

module.exports = pyramid;
