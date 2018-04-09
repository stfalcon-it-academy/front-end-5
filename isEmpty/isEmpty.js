"use strict";

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var obj = {};
alert (isEmpty(obj));

obj ["number"] = 9;
alert(isEmpty(obj));