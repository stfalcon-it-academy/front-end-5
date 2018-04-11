'use strict'

function Power (a,b) {
    var finish = a;
    for (var i= 1; i < b ; i++){
        finish = finish * a;
    }
    return finish;
}
var a= prompt('Введіть число яке буде піднесенно до степення','');
var b = prompt('Введіть степінь','');
if (b === ''){
    alert(a*a);
}
else if (b<=1) {
    alert('Введіть ціле число степіня');
}
else {
    alert(Power(a,b));
}



