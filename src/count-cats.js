const CustomError = require("../extensions/custom-error");

// [[1, 2, '^^'], ['sdfg', 0, 1]]
module.exports = function countCats(matrix) {
    return matrix.flat(Infinity).filter(el => el === '^^').length


    // let count = 0;
    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix[i].length; j++) {
    //         if (matrix[i][j] === '^^')
    //             count += 1;
    //     }
    // }
    // return count;
};