// by Christopher Gadzinski 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);
    console.log(max(arr));
    process.exit();
}

function findMaxIndex(arr) {
    maxIndex = -1;
    maxValue = -1;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

function max(arr) {
    // write your code here
    var firstMaxIndex = findMaxIndex(arr);
    var firstMaxNumber = arr[firstMaxIndex];
    arr.splice(firstMaxIndex, 1);
    var secondMaxIndex = findMaxIndex(arr);
    var secondMaxNumber = arr[secondMaxIndex];
    return firstMaxNumber*secondMaxNumber;
}

function maxSlow(arr) {
    var maxProduct = 0;
    for(var i = 0; i < arr.length; i++) {
        for(var j = i+1; j < arr.length; j++) {
            maxProduct = Math.max.apply(Math, [maxProduct, arr[i]*arr[j]])
        }
    }
    return maxProduct;
}

module.exports = max;
