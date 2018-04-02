"use strict";

function findX(a, b, c) {

    var D = Math.pow(b, 2) - 4 * a * c;
    
    console.log('----', D);

    if (D > 0) {
        var x1 = (-b + Math.sqrt(D)) / (2 * a);
        var x2 = (-b - Math.sqrt(D)) / (2 * a);

        console.log('---- x1', x1);
        console.log('---- x2', x2);
    } else if (D === 0) {
        x1 = -b / (2 * a);
        console.log('----', x1)
    } else {
        console.log('---- рівняння дійсних коренів немає')
    }
}

var a = prompt("Введіть значення a:");
var b = prompt("Введіть значення b:");
var c = prompt("Введіть значення c:");

findX(a, b, c);