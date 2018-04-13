"use strict";

var mylist = {};

alert(isEmpty(mylist));

mylist.name = 1;
mylist.height = 4;
mylist.width = 5;

alert(isEmpty(mylist));

function isEmpty(obj) {
    for(var key in mylist) {
        if (mylist.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
}


var counter = 0;

for (var key in mylist) {
    counter = counter + mylist[key];
}

alert( "Сумма значень: " + counter );



