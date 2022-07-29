// O(n)
function validAnagram(x, y) {
    if (x.length !== y.length) {
        return false
    }
    let objX = {};
    let objY = {};

    for (let key of x) {
        objX[key] = (objX[key] || 0) + 1;
    }

    for (let key of y) {
        objY[key] = (objY[key] || 0) + 1;
    }

    for (let key in objX) {
        if (!(key in objY)) {
            return false
        }
        if (objY[key] !== objX[key]) {
            return false
        }
    }
    return true
}