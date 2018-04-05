let codeObj = {
    name: "numbers",
    length: [45, 109, 32, 39, 1, 0]
};
codeObj.length[23]=95;
alert("Новий масив:"+codeObj.length);
function sumData() {
    let x=0;
    for (let key in codeObj.length){
        x=x+codeObj.length[key];
   }
    alert("Сумма значень масиву складає:"+x);
}
sumData();

// метод бульбашки//

let data=[1, 2, 7, 10, 6, 9, 3, 8, 5, 4];
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
document.write("Масив відсортований методом бульбашки:"+data);