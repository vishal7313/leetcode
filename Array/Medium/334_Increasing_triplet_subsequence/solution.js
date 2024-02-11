/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     if ((i + 2) > nums.length - 1) {
    //         break;
    //     } else {
    //         if ((nums[i] < nums[i + 1]) && (nums[i + 1] < nums[i + 2])) {
    //             return true
    //         }
    //     }
    // }

    // return false;
    // let numToSearch = nums[0];
    // let index = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if (numToSearch < nums[i+1]) {
    //         index.push(i);
    //     }
    //     numToSearch = nums[i+1];
    // }

    // if (index.length >= 3) {
    //     return true;
    // }

    // return false;
    let min = Math.max(...nums);
    let mid = min;

    for (let num of nums) {
        if (num <= min) {
            min = num;
        } else if (num <= mid)  {
            mid = num;
        } else {
            return true;
        }
    }
    
    return false;

};