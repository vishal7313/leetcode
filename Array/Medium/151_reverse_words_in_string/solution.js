/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let finalString = [];
    let tempString = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            tempString = `${tempString}${s[i]}`;
        } else {
           if (tempString.length !== 0) {
            finalString.push(tempString); 
           }
           tempString = '';
        }
    }

    if (tempString.length !== 0) {
        finalString.push(tempString); 
    }

    tempString = '';

    for (let i = finalString.length - 1; i >= 0; i--) {
        tempString = `${tempString}${finalString[i]}`;
        if (i !== 0) {
            tempString = `${tempString}${' '}`;
        }
    }

    return tempString;
};