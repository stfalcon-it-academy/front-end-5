function MPow(a,b) {
    let pow=a;
    for (i=0;i<b;i++){
        pow=pow*a;
    }
 return pow;
}
let a=prompt("Введіть значення яке хочете піднести до степення");
let b=prompt("Введіть степінь до якого хочете піднести значення");
if (a==="") {
    alert ("Перезавантажте сторінку та повторно введіть значення");
} else if (b==="") {
    let x=a*a;
    alert ("Квадрат значення"+a+"="+x);
}
else
alert ("Рішення:"+MPow(a,b));



