alert("Давай піднімемо твоє значення до степення");
function funcPow() {
let a=prompt("Введіть значення яке хочете піднести до степення");
let b=prompt("Введіть степінь до якого хочете піднести значення");
let x = Math.pow(a,b);
    if (a==="") {
        alert ("Повторно введіть значення");
    funcPow ();
    } else if (b==="") {
        x=Math.pow(a,2);
        alert(x);
    }
    else
        alert(x);
rep=confirm("Скористатися обрахункмами ще раз?");
if (rep===true) {
    funcPow();
} else
    document.write("Bye");
}

funcPow ()