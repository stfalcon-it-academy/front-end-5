"use strict";

function print(obj) {
    console.log(obj);
}

function isValidNum(val) {
    return ((val !== undefined) && !isNaN(val)) ? true : false;
}

function getUserInput(message) {
    let inputData;
    while (!isValidNum(inputData) || inputData < 0) {
        inputData = parseInt(prompt(message));
    }
    return inputData;
}

function powCalc(n, x) {
    let res = n;
    let expon = isValidNum(x) ? x : 2;

    for (let i = 1; i < expon; i++) {
        res *= n;
    }
    return res;
}

function main() {
    let startPowQuest = true;
    while (startPowQuest) {
        let a = getUserInput("Вкажіть число. ");
        let x = getUserInput("Вкажіть степінь. ");
        let res = powCalc(a, x);
        startPowQuest = confirm(a + " в степені " + x + ", дорівнюватиме: " + res + "\n\nСпробувати ще?");
    }
}

var codeObj = {
    length: [45, 109, 32, 39, 1, 0],
    addToArrByindex: function(val, index) {
        this.length[index] = val;
    }
};

function isEmpty(obj) {
    let lenght = 0;
    for (let key in obj) {
        lenght++;
    }
    return lenght > 0 ? false : true;
}

function sumData(val) {
    let sum = 0;
    if (!isEmpty(val)) {
        for (let key in val) {
            sum += val[key];
        }
    }
    return sum;
}

confirm("Стартуємо ?") ? main() : false;

codeObj.addToArrByindex(95, 23);

print(sumData(codeObj.length));
