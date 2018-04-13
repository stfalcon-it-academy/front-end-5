"use strict";

var codeObj = {
    length:[45, 109, 32, 39, 1, 0]
};

alert("Всі значення масиву length в об'єкті codeObj:  " + codeObj.length);

codeObj.length[23] = 95;
alert("Значення масиву length в об'єкті codeObj після додавання ще одного елементу зі значенням 95 та індексом 23 =  " +codeObj.length);

function sumData() {
    var result=0;

    for (var key in codeObj.length) {
        result = result + codeObj.length[key];
    }
    alert("Сума значення масиву length в об'єкті codeObj = " + result);
}

sumData();