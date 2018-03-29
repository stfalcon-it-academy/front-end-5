
alert ("Привіт! Давай розв'яжемо квадратне рівняння")
let a = prompt("Введіть значення а",'');
let b = prompt("Введіть значення b",'');
let c = prompt("Введіть значення с",'');

let D=Math.pow(b,2)-(4*a*c);
alert ("Дискримінант ="+D);
if (D>0) {
    let x1=(-b+Math.sqrt(D))/(2*a);
    let x2=(-b-Math.sqrt(D))/(2*a);
    alert( "x1="+x1)
    alert("x2="+x2)
}
else if (D===0) {
x1= -(b/2*a)
    alert ("х="+x1)
}
else {
    alert ("Рівняння дійсних коренів немає")
}
