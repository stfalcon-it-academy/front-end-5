var codeObj = {
    length: [45, 109, 32, 39, 1, 0]
};

alert("Масив length з числами: " + codeObj.length);

codeObj.length[23] = 95;
alert("Довжина масиву length числом 95 та індексом 23: " + codeObj.length);

function sumData(codeObj) {
    var sum = 0;

    for (var key in codeObj.length) {
        sum = sum + codeObj.length[key];
    }
    return sum;
}

alert("Сума масиву length = " + sumData(codeObj));