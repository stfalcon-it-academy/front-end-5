function print(obj) {
    console.log(obj);
}

function isValidArr(arr) {
    let lenght = arr.length;
    for(let i = 0; i < lenght; i++) {
        if (isNaN(arr[i])) {
            return false;
        }
    }
    return true;
}

function bubbleSort(arr) {
    let lenght = arr.length;
    for(let i = 0; i < lenght - 1; i++) {
        for(let j = i + 1; j < lenght; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function main() {
    var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];

    if (isValidArr(data)) {
        print(bubbleSort(data));
    }

    return true;
}

main();