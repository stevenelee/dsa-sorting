function merge(arr1, arr2) {
  let mergedArr = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;

  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
      mergedArr.push(arr1[arr1Pointer]);
      arr1Pointer++;
    } else {
      mergedArr.push(arr2[arr2Pointer]);
      arr2Pointer++;
    }
  }

  if (arr1Pointer >= arr1.length) {
    return mergedArr.concat(arr2.slice(arr2Pointer));
  }

  return mergedArr.concat(arr1.slice(arr1Pointer));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middleOfArr = Math.floor(arr.length / 2)
  let arr1 = arr.slice(0, middleOfArr);
  let arr2 = arr.slice(middleOfArr);

  return merge(mergeSort(arr1), mergeSort(arr2));
}

module.exports = { merge, mergeSort};