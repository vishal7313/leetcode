/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let tempMax = 0;
    let add;
    for (let i = 0; i < accounts.length; i++) {
        add = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            add += accounts[i][j];
        }

        tempMax = Math.max(tempMax, add);
    }

    return tempMax;
};