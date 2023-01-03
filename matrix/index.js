// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {}


//notes for solution: 
//create empty array of arrays called 'results'
//create a counter variable, starting at 1
//as long as (start column <= end column) AND (start row <= end row)
//loop from start column to end column
//at results[start_row][i] assign counter variable
//increment counter
//increment start row
//loop from start row to end row
//at results[i][end_column] assign counter variable
//increment counter
//decrement end column
//...repeat for other two sides


module.exports = matrix;
