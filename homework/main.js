 "use strict";

function findX() {

    var D = b * b - 4 * a * c;

    if(D > 0){
        var x1 = (-b + Math.sqrt(D)) / (2 * a);
        var x2 = (-b - Math.sqrt(D)) / (2 * a);
        alert("Значення x1" + "=" + x1 );
        alert("Значення х2" + "=" + x2);
    } else if (D === 0){
        x1 = -b / (2 * a);
        alert("Значення х1" + "=" + x1)
    } else {
        alert("Дійсних коренів рівняння немає");
    }

}

var a = prompt("Введіть значення а:");
var b = prompt("Введіть значення b:");
var c = prompt("Введіть значення c:");

findX(a, b, c);