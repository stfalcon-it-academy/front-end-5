'use strict';
var CodeObj = {
    Numbers:[45, 109, 32, 39, 1, 0]
};

CodeObj.Numbers[23]=95;
alert('Довжинна массиву - ' + CodeObj.Numbers);

function SumData(array){
    var summ=0;
    for (var key in array.Numbers){
        summ = summ + array.Numbers[key];
    }
    return summ;
}
alert('Сума чисел массиву ' + SumData(CodeObj));
