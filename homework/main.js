"use strict";

var question = confirm( "Ви хочете підняти число до степеня?");

function pov(x,y) {
    let size = x;
    for(let i = 0; i < y; i++) {
        size = size * x;
    }
    return size;
}


function myPov() {
    if(question){
        var x = prompt("Введіть значення : ");
        var y = prompt("Введіть степінь: ");
        if(x === ""){
            alert("Ви забули ввести значення яке потрібно піднести до степеня");
            myPov();
        } else if (y === ""){
            alert ("Якщо покозник степеня не заданий користувачем, то він по замовчуванню рівний 2. Результат = " + x * x);
            let q = confirm("Бажаєте продовжити роботу з піднесенням до степеня?");
            if (q === true){
                alert(myPov());
            }else{
                alert("Бувай!!!");
            }

        } else {
            alert("Результат обрахунків становить: " + pov(x,y));
            let q = confirm("Бажаєте продовжити роботу з піднесенням до степеня?");
            if (q === true){
                alert(myPov());
            }else{
                alert("Бувай!!!");
            }
        }

    }else {
        alert("Бувай");
    }
}

myPov();