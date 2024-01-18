/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let map = {};
    let outputArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]] += 1; 
        }
    }

    nums.length = 0;
    for (const [key, value] of Object.entries(map)) {
        if (key != val) {
            for (let i = 1; i <= value; i++) {
                nums.push(key);
            }
        }
    }
};