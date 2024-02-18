/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let map = {};
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                    'u', 'v', 'w', 'x', 'y', 'z'
                ];
    let count = 0;
    let output = '';
    
    for (let i = 0; i < key.length; i++) {
        if (key[i] === ' ') {
            continue
        }
        if (map[key[i]] === undefined) {
            map[key[i]] = alphabet[count];
            count++;
        }
    }

    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
            output = `${output} `;
        } else {
            output = `${output}${map[message[i]]}`;
        }
    }

    return output;
};