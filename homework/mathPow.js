function mathPow() {
    var a = prompt("Введіть число");
    var b = prompt("Введіть степінь");
    var x = Math.pow(a, b);
    if (a === "") {
        alert("Число не введено!");
        mathPow()
    }
    else if (b === "") {
        alert("Степінь не введено!");
        mathPow()
    }
    else
        alert("Число " + a + " піднято до степеню " + b + ". Результат: " + x);
}

mathPow();