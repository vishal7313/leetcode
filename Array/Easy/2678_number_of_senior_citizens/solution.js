/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let age = 0;
    let final = 0;
    for (let i = 0; i < details.length; i++) {
        age = details[i];
        age = `${age[age.length - 4]}${age[age.length - 3]}`;
        age = parseInt(age);

        if (age > 60) {
            final += 1;
        }
    }

    return final;
};