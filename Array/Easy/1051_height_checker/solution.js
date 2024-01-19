/**
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function(heights) {
    const expected = [...heights].sort((a,b) => a-b)
    let count = 0;
    for (let i = 0; i <= heights.length - 1; i++) {
        if (heights[i] !== expected[i]) {
            count++;
        }
    }

    return count++;
};