var per = prompt('Введіть перше значення','');
var drug = prompt('Введіть друге значення', '');
var tret = prompt('Введіть третє значення', '');

var func = function(a, b, c) {
    var D = (b * b) - 4 * a * c;


    if ( D > 0) {
        var x1 = (-b + Math.sqrt(D)) / (2 * a);
        var x2 = (-b - Math.sqrt(D)) / (2 * a);

       alert('**** x 1 = ' + x1);
       alert('**** x 2 = ' + x2);
    } else if ( D === 0 ) {
        x1 = -b / (2 * a);
        alert('**** x 1 = ' + x1);
    } else {
        alert('Рівняння дійсних розвязків не має');
    }
};

func (per, drug, tret);