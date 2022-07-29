const maxSubArray = (arr, num) => {
    let tempSum = 0;
    let maxSum = 0;

    for (let i = 0; i < num; i++) {
        tempSum += arr[i]
    }

    maxSum = tempSum

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

