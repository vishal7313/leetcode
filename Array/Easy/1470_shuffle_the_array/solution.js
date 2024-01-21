/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = [];
    for (let i = 0; i <= n - 1; i++) {
        arr.push(nums[i]); 
        arr.push(nums[n+i]); 
    }

    return arr;
};