function ABC () {
    alert('Привет, будем развязывать квадратное уровнение!!');
    var a=prompt("Введите число 'a'",'');
    var b=prompt("Введите число 'b'",'');
    var c=prompt("Введите число 'c'",'');
    var D=(b*b)-4*a*c;
    alert('Дискриманиант равен '+D);
    if (D>0){
        var x1=(-b+Math.sqrt(D))/(2*a);
        var x2=(-b-Math.sqrt(D))/(2*a);
        alert('x1 равен ' + x1);
        alert('x2 равен ' + x2);
    }
    else if (D===0){
        var x = -b/(2*a);
        alert('x равен ' + x);
    }
    else {
        alert('Рівняння коренів не має');
    }
}
ABC();

