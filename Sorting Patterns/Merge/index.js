function mergeSort(a, b) {
    let i = 0;
    let j = 0;
    let c = []
    while (c.length !== a.length + b.length) {
        if (a[i] <= b[j] || b[j] === undefined) {
            c.push(a[i]);
            i++
        } else if (a[i] >= b[j] || a[i] === undefined) {
            c.push(b[j]);
            j++
        }
    }
    return c
}

function breakArr1(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = breakArr1(arr.slice(0, mid));
    let right = breakArr1(arr.slice(mid));
    return mergeSort(left, right);
}

