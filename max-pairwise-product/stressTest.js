const { read } = require('fs');
// by Christopher Gadzinski 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
// rl.once('line', () => {
//     rl.on('line', readLine);
// });
rl.on('line', readLine);

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);
    stressTest(arr[0], arr[1]);
    // console.log(maxSlow(arr));
    // console.log(max(arr));
    process.exit();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 2;
  }

function stressTest(n, m) {
    console.log(n, m);
    while (true) {
        var rand = getRandomInt(n);
        var arr = [];
        for(var i = 0; i < n; i++) {
            arr.push(getRandomInt(m))
        }
        console.log(arr);
        var result2 = maxSlow(arr);
        var result1 = max(arr);
        if(result1 == result2) {
            console.log('ok.');
        } else {
            console.log("wrong answer", result1, result2);
            return;
        }
    }
}

function findMaxIndex(arr) {
    maxIndex = -1;
    maxValue = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }
    // var maxIndex = arr.indexOf(maxValue);
    return maxIndex;
}

function max(arr) {
    // write your code here
    var firstMaxIndex = findMaxIndex(arr);
    var firstMaxNumber = arr[firstMaxIndex];
    arr.splice(firstMaxIndex, 1);
    var secondMaxIndex = findMaxIndex(arr);
    var secondMaxNumber = arr[secondMaxIndex];
    console.log(firstMaxNumber, secondMaxNumber);
    return Number(firstMaxNumber*secondMaxNumber);
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

module.exports = stressTest;