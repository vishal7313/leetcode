/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // let finalArr = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== 0) {
    //         finalArr.push(nums[i]);
    //     }
    // }

    // let value = nums.length - finalArr.length;

    // for (let i = 1; i <= value; i++) {
    //     finalArr.push(0);
    // }
    
    // return nums;

    let low = 0;
    let high = low + 1;

    while (high <= nums.length - 1) {
        if (nums[low] !== 0) {
            low++;
            high++;
        } else {
            if (nums[high] !== 0) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
            }
            high++;
        }
    }
};