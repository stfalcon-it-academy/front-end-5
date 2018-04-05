// Два объекта - не пустой и пустой

var cat = {
    name: 'cat',
    paws: 10,
    fur: 'green',
    eyes: 'red',
    dangerous: true
};
var dog = {};



// Объект для проверки при помощи метода isEmpty
// Если проверяемый объект не пустой - возвращает True и преобразовывает объект в массив
// в обратном случае - False

var inspector = {
    isEmpty: function(obj) {
        var result;
        for (let key in obj) {
            result = result + ' | ' + key + ': ' + obj[key];
        }
        if (result == undefined) {
            alert (false);
        } else {
            let x = result.split(' | ');
            x.shift();
            alert(true);
            return x;
        }
    }
};
