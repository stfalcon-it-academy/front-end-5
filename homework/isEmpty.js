function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

var timer = {};
alert(isEmpty(timer));
timer["01:00"] = "Старт";
alert(isEmpty(timer));