/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let finalArr = [];
    let runningSum = 0;
    for (let i = 0; i < nums.length; i++) {
        finalArr.push(nums[i] + runningSum);
        runningSum = nums[i] + runningSum;
    }

    return finalArr;
};                                                                       