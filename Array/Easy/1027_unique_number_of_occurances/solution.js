/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    let occuranceMap = [];
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] === undefined) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]] += 1;
        }
    }

    for (const [key, value] of Object.entries(map)) {
        if (occuranceMap[value] === undefined) {
            occuranceMap[value] = 1;
        } else {
            occuranceMap[value] += 1;
        }
    }

    for (const [key, value] of Object.entries(occuranceMap)) {
        if (value > 1) {
            return false;
        }
    }


    return true;
};