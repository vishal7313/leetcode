/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunk = [];
    let finalArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (chunk.length !== size) {
            chunk.push(arr[i]);
        } else {
            finalArr.push(chunk);
            chunk = [arr[i]];
        }
    }

    if (chunk.length !== 0) {
        finalArr.push(chunk);
    }

    return finalArr;
};
