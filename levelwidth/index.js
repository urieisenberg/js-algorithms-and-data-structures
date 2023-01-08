// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's']; // s is a stopper
  const counters = [0]; // counters for each level

  while (arr.length > 1) {
    // while there are still nodes in the array besides the stopper
    const node = arr.shift(); // remove the first node from the array

    if (node === 's') {
      // if the node is a stopper
      counters.push(0); // add a new counter for the next level
      arr.push('s'); // add a new stopper for the next level
    } else {
      arr.push(...node.children); // add all of the children of the node to the end of the array
      counters[counters.length - 1]++; // increment the last counter 
    }
  }

  return counters;
}

module.exports = levelWidth;
