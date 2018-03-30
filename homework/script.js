function equation() {
    var a = prompt('Введіть число A', '');
    var b = prompt('Введіть число B', '');
    var c = prompt('Введіть число C', '');
    var d = (b * b) - 4 * a * c;
    alert('Дискримінант дорівнює ' + d);
    if (d > 0) {
        var x1 = (-b + Math.sqrt(d)) / (2 * a);
        var x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert('X1 дорівнює ' + x1);
        alert('X2 дорівнює ' + x2);
    }
    else if (d === 0) {
        var x = -b / (2 * a);
        alert('X дорівнює ' + x);
    }
    else {
        alert("Рівняння розв'язку не має");
    }
}

equation();