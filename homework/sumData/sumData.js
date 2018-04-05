var dog = {
    name: 'barbos',
    paws: 4,
    length: [45, 109, 32, 39, 1, 0]
}

dog['length'][23] = 95;

function sumData(obj) {
    let sum = 0;
    for (let key in obj['length']) {
        sum = sum + obj['length'][key];
    }
    return sum;
}
alert('сума значень елементів масиву: ' + sumData(dog));
