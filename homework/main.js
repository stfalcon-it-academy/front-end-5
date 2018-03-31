"use strict";

let question = confirm("Хочете підняти число до степеня?");

function desire () {


    if (question === true) {
        let x = prompt("Введіть значення:");
        let y = prompt("Введіть степінь:");


        if (x < 0 || x === 0){
            alert("Ведіть значення більше нуля!!!");
            desire();
        }else if (y < 0){
            alert("Введіть степінь більше нуля!!!");
            desire();
        }else if(y <= 2 ){
            let a = Math.pow(x,2);
            alert("Результат обрахунків = " + a);

            question = confirm("Хочете підняти число до степеня?");

            if(question === true){
                desire();
            } else {
                alert("Бувай!)");
            }

        } else{
            let a = Math.pow(x,y);
            alert("Результат обрахунків = " + a);

            question = confirm("Хочете підняти число до степеня?");

            if(question === true){
                desire();
            } else {
                alert("Бувай!)");
            }
        }
    } else {
        alert("Бувай!)");
    }
}

desire();
