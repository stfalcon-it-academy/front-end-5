function mathPow(a, b) {
    var x = a;
    for (i = 1; i < b; i++) {
        x = x * a;
    }
    return x;
}

var a = prompt("Введіть число");
var b = prompt("Введіть степінь");
if (a === "") {
    alert("Число не введено!");
}
else if (b === "") {
    alert("Степінь не введено!");
}
else
    alert("Число " + a + " піднято до степеню " + b + ". Результат: " + mathPow(a, b));