/*=================== 1 ===================
1. Створити функцію для визначення:
    + Чи об'єкт пустий( `isEmpty(obj)` ). Функція повертає `boolean` значення.
    - Яка буде приймати параметр типу `sumData([array])`, перевіряти чи він порожній за допомогою функції `isEmpty`.
1. Створити об'єкт - `codeObj`, в якому буде масив - `length` з числами 45, 109, 32, 39, 1, 0.
    Додати до нього число 95 з індексом 23(`data[23]`). Потім виконати функцію `sumData()`, для цього масиву.
 */
function sumData(array){
    if (isValidArr(array)) {
        sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return 'Сумма елементів массиву: ' + sum;
    } else {
        return 'Массив пустий';
    }

}

function isValidArr(arr) {
    var lenght = arr.length;
    for(var i = 0; i < lenght; i++) {
        if (isNaN(arr[i])) {
            return false;
        }
    }
    return true;
}

// застосування
var codeObj = {
    length : [45, 109, 32, 39, 1, 0]
};

var result_1 = sumData(codeObj.length);
console.log('result_1: ' + result_1);


// ================= 2 =====================
// ***Відсорувати `var data = 1, 2, 7, 10, 6, 9, 3, 8, 5, 4` методом бульбашки.
function bubbleSort(arr) {
    var lenght = arr.length;
    for(var i = 0; i < lenght - 1; i++) {
        for(var j = i + 1; j < lenght; j++) {
            if (arr[j] < arr[i]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// застосування
var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];

var result_2 = bubbleSort(data);
console.log('result_2: ' + result_2);
