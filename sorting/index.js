// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  //iterate through the array
  for (let i = 0; i < arr.length; i++) {
    //iterate through the array again
    for (let j = 0; j < arr.length - i - 1; j++) {
      //if the first element is greater than the second element
      if (arr[j] > arr[j + 1]) {
        //swap the two elements
        let lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
} // O(n^2) time complexity

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
