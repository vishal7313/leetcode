/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let noOfOps = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 !== 0) {
            noOfOps += 1
        }
    }
    return noOfOps;
};