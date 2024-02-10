/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let maxCount = Math.max(word1.length, word2.length); 
    let finalString = '';
    for (let i = 0; i < maxCount; i++) {
        if (word1[i] !== undefined) {
            finalString = `${finalString}${word1[i]}`;
        }

        if (word2[i] !== undefined) {
            finalString = `${finalString}${word2[i]}`;
        }
        
    }

    return finalString;
};