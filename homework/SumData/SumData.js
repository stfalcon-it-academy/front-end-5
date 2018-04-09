'use strict';
var CodeObj;
CodeObj = {
    Numbers:[45, 109, 32, 39, 1, 0]
};
CodeObj.Numbers[23]=95;
document.write('Довжинна массиву - ' + CodeObj.Numbers);


function SumData(){
    var summ=0;
    for (var key in CodeObj.Numbers){
        summ = summ + CodeObj.Numbers[key];
    }
    document.write('<br \\/>Сума чисел массиву ' + summ);
}
SumData();
