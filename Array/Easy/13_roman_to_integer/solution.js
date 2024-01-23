/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanNumber = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let preference = {};
    let intValue = {};
    let value = [1, 5, 10, 50, 100, 500, 1000];
    let totalValue = 0;
    for (let i = 0; i <= romanNumber.length - 1; i++) {
        preference[romanNumber[i]] = i+1;
        intValue[romanNumber[i]] = value[i];
    }

    for (let i = s.length - 1; i >= 0; i--) {
        if (preference[s[i - 1]] < preference[s[i]]) {
            totalValue += (intValue[s[i]] - intValue[s[i - 1]]);
            i = i - 1;
        } else if (
            (preference[s[i - 1]] >= preference[s[i]])
            || (i - 1) < 0
        ) {
            totalValue += intValue[s[i]];
        }
    }

    return totalValue;

};