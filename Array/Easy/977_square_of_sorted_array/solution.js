/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for (let i = 0; i <= nums.length - 1; i++) {
        nums[i] = nums[i] ** 2;
    }

    nums = [...nums].sort((a,b) => a-b);

    return nums;
};
