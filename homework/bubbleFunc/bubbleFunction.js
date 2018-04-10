let data=[1, 2, 7, 10, 6, 9, 3, 8, 5, 4];

function bubble(data) {
    for (let m=0;m<data.length;m++){
        for (let n=0;n<data.length;n++){
            let temp=0;
            if (data[n]>data[n+1]){
                temp=data[n];
                data[n]=data[n+1];
                data[n+1]=temp;
            }
        }
    }
    document.write("Масив відсортований функцією метода бульбашки:" +data);
}

bubble(data);