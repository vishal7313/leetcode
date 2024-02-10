/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = [];
    let newString = [];
    let finalString = '';
    for (let i = 0; i < s.length; i++) {
        if (
            (s[i] === 'a' || s[i] === 'A')
            ||  (s[i] === 'e' || s[i] === 'E')
            ||  (s[i] === 'i' || s[i] === 'I')
            ||  (s[i] === 'o' || s[i] === 'O')
            ||  (s[i] === 'u' || s[i] === 'U')
        ) {
            vowels.push(s[i]);
            newString.push('NaN');
            s[i] = '';
        } else {
            newString.push(s[i]);
        }
    }

    for (let i = 0; i < newString.length; i++) {
       if (newString[i] === 'NaN') {
            newString[i] = vowels[vowels.length - 1];
            vowels.pop();
        } 
    }

    for (let i = 0; i < newString.length; i++) {
        finalString = `${finalString}${newString[i]}`;
    }

    return finalString;
};