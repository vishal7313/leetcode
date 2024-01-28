/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]] += 1;
        }
    }

    function recursion(obj, value) {
        if (obj[value] === undefined) {
            return value;
        } else {
            value = value * 2;
            return recursion(obj, value);
        }
    }

    let final = recursion(map, original);

    return final;
};