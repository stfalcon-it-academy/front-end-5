function findX(a, b, c) {
    var x1, x2;
    var d = b * b - 4 * a * c;

    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert("Значення x1 = " + x1 + "; Значення x2 = " + x2 );
    } else if (d === 0) {
        x1 = -b / (2 * a);
        alert("Значення x1 = " + x1);
    } else {
        alert("Значення рівняння дійсних коренів немає");
    }
}

var a = prompt("Введіть значення а:");
var b = prompt("Введіть значення b:");
var c = prompt("Введіть значення c:");

findX(a, b, c);