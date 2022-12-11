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

// Solution #1
// from 0 to n (iterate through rows) ->
// create an empty string, 'level' ->
// from 0 to ??? (columns) ->
// if the column should have a '#' ->
// add a '#' to 'level' ->
// else ->
// add a space to 'level' ->
// console.log 'stair'
//
function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = '';
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

module.exports = pyramid;
