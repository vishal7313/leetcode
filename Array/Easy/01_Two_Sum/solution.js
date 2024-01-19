/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }

   for (let i = 0; i < nums.length; i++) {
       let remainder = target - nums[i];

       if (map[remainder] !== undefined && map[remainder] !== i) {
           return [i, map[remainder]];
       }
   }
};