var base = prompt('Enter the number to multiply', '');
var exp = prompt('Enter the exponent value', '');
var math = function(y, x) {
    let result = y;
    for(let i = 1; i < x; i++){
        result = (result * y);
    }
    return result;
};

if ((!base) && (!exp)) {
    alert('error');
} else if (exp > 0) {
    alert(math(base, exp));
} else if (!exp){
    alert('*****Exponent is set to 2 ***** Answer is ' + Math.pow(base, 2));
} else {
    alert('invalid exponent value');
}
