/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let map1 = {};
    let map2 = {};
    let map1Array = [];
    let map2Array = [];

    for (let i = 0; i < nums1.length; i++) {
        if (map1[nums1[i]] === undefined) {
            map1[nums1[i]] = 1;
        } else {
            map1[nums1[i]] += 1;
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (map2[nums2[i]] === undefined) {
            map2[nums2[i]] = 1;
        } else {
            map2[nums2[i]] += 1;
        }
    }

    for (const [key, value] of Object.entries(map1)) {
        if (map2[key] === undefined) {
            map1Array.push(key)
        }
    }

    for (const [key, value] of Object.entries(map2)) {
        if (map1[key] === undefined) {
            map2Array.push(key)
        }
    }

    return [map1Array, map2Array];

};