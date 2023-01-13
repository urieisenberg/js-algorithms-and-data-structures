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

function selectionSort(arr) {
  //iterate through the array
  for (let i = 0; i < arr.length; i++) {
    //set the index of the minimum element to the current index
    let indexOfMin = i;
    //iterate through the array again
    for (let j = i + 1; j < arr.length; j++) {
      //if the element at the current index is greater than the element at the minimum index
      if (arr[indexOfMin] > arr[j]) {
        //set the minimum index to the current index
        indexOfMin = j;
      }
    }
    //if the minimum index is not equal to the current index
    if (indexOfMin !== i) {
      //swap the two elements
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
} // n^2 time complexity

function mergeSort(arr) {
  //
}

function merge(left, right) {
  const results = [];

  // while there are still elements in both arrays
  while (left.length && right.length) {
    // if the first element of the left array is less than the first element of the right array
    if (left[0] < right[0]) {
      // shift the first element of the left array into the results array
      results.push(left.shift());
    } else {
      // shift the first element of the right array into the results array
      results.push(right.shift());
    }
  }

  // return the results array concatenated with the remaining elements of the left array and the right array
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
