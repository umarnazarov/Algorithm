function binarySearch(arr, n) {
  let start = 0;
  let end = arr.length - 1;

  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== n && start <= end) {
    if (arr[middle] < n) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === n ? middle : -1;
}
