function isEmpty(obj) {
    for (var key in obj){
        return false;
    }
    return true;
}
var serial = {};
alert( isEmpty(serial));
serial['Початок о - ']='12';
alert(isEmpty(serial));
