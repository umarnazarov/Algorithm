function pivot(arr, start = 0, end = arr.length - 1) {
    function swapper(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    }

    let pivotVal = arr[start];
    let swapIdx = 0;

    for (let i = start + 1; i <= end; i++) {
        if (pivotVal > arr[i]) {
            swapIdx++;
            swapper(arr, swapIdx, i);
        }
    }
    swapper(arr, start, swapIdx);
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, right)
    }
    return arr
}

quickSort([1, 3, 4, 2, 0])