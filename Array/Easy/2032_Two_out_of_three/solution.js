/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let maps = {};
    let map1 = {};
    let map2 = {};
    let map3 = {};

    let final = [];
    for (let i = 0; i <= nums1.length - 1; i++) {
        if (maps[nums1[i]] === undefined) {
            maps[nums1[i]] = 1;
        }

        if (map1[nums1[i]] === undefined) {
            map1[nums1[i]] = 1;
        }
    }

    mapsCopy = maps;
    for (let i = 0; i <= nums2.length - 1; i++) {
        if (maps[nums2[i]] === undefined) {
            maps[nums2[i]] = 1;
        }

        if (map2[nums2[i]] === undefined) {
            map2[nums2[i]] = 1;
        }
    }

    mapsCopy = maps;
    for (let i = 0; i <= nums3.length - 1; i++) {
        if (maps[nums3[i]] === undefined) {
            maps[nums3[i]] = 1;
        }

        if (map3[nums3[i]] === undefined) {
            map3[nums3[i]] = 1;
        }
    }


    for (const [key, value] of Object.entries(maps)) {
        if (
            (map1[key] !== undefined && map2[key] !== undefined)
            || (map1[key] !== undefined && map3[key] !== undefined)
            || (map2[key] !== undefined && map3[key] !== undefined)
        ) {
            final.push(key);
        }
    }

    return final;
};