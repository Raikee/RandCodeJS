var ng = require("./NameGenerator.js");

//File for randomly creating math expressions

//generates string of random number
function randstrnum(max) {
    return Math.floor((Math.random() * max) + 1).toString();
}

//randomly selects an array element
var randselect = function(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
};

var mathsymbols = "+-*/%".split("");
var equalsymbols = ["+=", "-=", "*=", "/="];
//forms random string of arithmetic expression.
var randmath = function(length) {
    var expr = randstrnum(30);
    while (expr.length<length) {
        expr += randselect(mathsymbols) + randstrnum(30);
    }
    return expr;
};
exports.randmath = randmath;

// returns string for random math function, of one line
var randommathfunc = function (n) {
    var param = ng.randname(4);
    var funcstring = "function " + ng.randname(4) + "(" + param + ") {\n   return ";
    funcstring += param;
    var count = 0;
    while(count<n) {
        count += 1;
        var rand = Math.floor((Math.random() * 4) + 1);
        if(rand>2) funcstring += randselect(mathsymbols) + param;
        else funcstring += randselect(mathsymbols) + randstrnum(30);
    }
    funcstring += ";\n}";
    return funcstring;
};
//exports the random math function
exports.randommathfunc = randommathfunc;