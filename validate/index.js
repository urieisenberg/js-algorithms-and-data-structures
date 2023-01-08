// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) return false; // if max is not null and node.data is greater than max, return false
  if (min !== null && node.data < min) return false; // if min is not null and node.data is less than min, return false

  if (node.left && !validate(node.left, min, node.data)) return false; // if node.left is not null and validate returns false, return false
  if (node.right && !validate(node.right, node.data, max)) return false; // if node.right is not null and validate returns false, return false

  return true; // if all conditions are met, return true
}

module.exports = validate;
