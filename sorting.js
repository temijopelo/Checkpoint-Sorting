function insertionSort(arr) {
  // Get the length of the array
  const n = arr.length;

  // Iterate over each element starting from the second element
  for (let i = 1; i < n; i++) {
    let key = arr[i]; // Element to be inserted into the sorted portion
    let j = i - 1; // Start comparing with the element before i

    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Insert the key at the correct position
    arr[j + 1] = key;
  }

  return arr;
}

// Example usage
let array = [12, 11, 13, 5, 6];
console.log("Original array:", array);
let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
