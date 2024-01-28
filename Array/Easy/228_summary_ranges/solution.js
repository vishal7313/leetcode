/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let curr = nums[0];
    let finalArr = [];
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            max = nums[i+1];
        } else {
            if (max === curr || max === 0) {
                finalArr.push(`${curr}`);
            } else {
                finalArr.push(`${curr}->${max}`);
            }
            
            curr = nums[i+1];
            max = nums[i+1];
        }
    }

    return finalArr;
};