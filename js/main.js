var a, b, c;
var start = true;

function userInput (char) {
    let input = parseInt(prompt("Input number " + char)); 
    if (!isNaN(input) && input !== undefined) {
        return input;
    }
    else {
        return false;
    }
}

function getDiscrim (a, b, c) {
    let output;
    let D = Math.pow(b, 2) - 4 * a * c;
    
    if (D > 0 && D != 0) {
        var x1 = (-b + Math.sqrt(D)) / (2 * a)
        var x2 = (-b - Math.sqrt(D)) / (2 * a)
        output = String("Discriminant = "+ D +".\nRoot x1 = " + x1 +".\nRoot x2 = " + x2 + ".");
    }
    else if (D < 0 && D != 0) {
        output = String("No discriminant roots!");
    }
    else {
        var x = -b / (2 * a);
        output = String("Discriminant = "+ D +".\nRoot x = " + x + ".");
    }

    return output;
}

function getUserData () {
    while (!a && !b && !c) {
        a = userInput("\"A\"");
        while (a && !b && !c) {
            b = userInput("\"B\"");
            while (a && b && !c) {
                c = userInput("\"C\"");
                if (a && b && c) {
                    if (confirm(getDiscrim(a, b, c) + "\n\nGet discriminant calculation again?")) {
                        a = false;
                        b = false;
                        c = false;
                        start = true;
                    } else {
                        start = false;
                    }
                }
            }
        }
    }
}

while (start) {
    getUserData ();
}