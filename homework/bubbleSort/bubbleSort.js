var arr = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4, 2];
var arrL = arr.length;


for (let j = 0; j < arrL; j++) {
    for (let i = 0; i < arrL - 1; i++) {
        if (arr[i] > arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    console.log(arr);
}


