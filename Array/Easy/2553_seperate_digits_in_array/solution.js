/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let valueInString = '';
    let finalArr = [];
    for (let i = 0; i < nums.length; i++) {
        valueInString = `${valueInString}${nums[i]}`;
    }

    for (let i = 0; i < valueInString.length; i++) {
        finalArr.push(valueInString[i]);
    }

    return finalArr;
};