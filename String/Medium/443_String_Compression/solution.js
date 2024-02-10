/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // Vishal Solution
    // let map = {};
    // let finalArr = [];
    // map[chars[0]] = 1;
    // for (let i = 1; i < chars.length; i++) {
    //     if (map[chars[i]] !== undefined) {
    //         map[chars[i]] += 1;
    //     } else {
    //         finalArr.push(Object.keys(map)[0]);
    //         if (Object.values(map)[0] !== 1) {
    //             finalArr.push(`${Object.values(map)[0]}`);
    //         }
    //     }
    //     map = {};
    //     map[chars[i]] = 1;
    // }

    // if (Object.keys(map).length !== 0) {
    //     finalArr.push(Object.keys(map)[0]);
    //     if (Object.values(map)[0] !== 1) {
    //         finalArr.push(`${Object.values(map)[0]}`);
    //     }
    // }

    // return finalArr;


    let i = 0;
    let j = 0;
    while (j < chars.length) {
        let count = 0;
        let curr = chars[j];
        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }
        chars[i++] = curr;
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i++] = digit;
            }
        }
    }
    return i;
    
};