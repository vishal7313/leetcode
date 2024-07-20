/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    // Create sets from the arrays to efficiently perform set operations.
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    // Create a new set from the intersection of set1 and set2 using filter and has.
    // Convert the resulting set back to an array using Array.from.
    return Array.from(new Set([...set1].filter(x => set2.has(x))));
};