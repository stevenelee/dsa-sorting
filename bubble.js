function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log("after first loop", arr)
    for (let j = 0; j <= i-1; j++) {
      console.log("after second loop", arr)
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;