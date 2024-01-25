/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let maps = {};

    for (let i = 0; i < nums.length; i++) {
        if (maps[nums[i]] === undefined) {
            maps[nums[i]] = 1;
        } else {
            maps[nums[i]] += 1;
        }
    }

    for (const [key, value] of Object.entries(maps)) {
        if (value === 1) {
            return key
        }
    }
};