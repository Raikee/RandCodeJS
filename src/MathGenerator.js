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
//forms random string of arithmetic expression.
var randmath = function(length) {
    var expr = randstrnum(30);
    while (expr.length<length) {
        expr += randselect(mathsymbols) + randstrnum(30);
    }
    return expr;
};

exports.randmath = randmath;