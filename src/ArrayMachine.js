/**
 * Created by Josh on 2/3/16.
 */
var ng = require("./NameGenerator.js");
var mg = require("./MathGenerator.js");
var fg = require("./FuncGenerator.js");
var ag = require("./ArrayGenerator.js");
var amethods = ".toString() .pop() .push({arg}) .shift() .unshift({arg}) .sort() .reverse() .concat({arg})".split(" ");
//Machine that writes functions that take in a single array as a parameter and output some array.

var ArrayMachine = function(maxops) {
    var count = 0;
    var paramname = ng.randname(6);
    var funcstr = fg.singlefuncline(ng.randname(6), paramname);
    while (count < maxops) {
        var chosen = ng.randnum(5);
        switch(chosen) {
            case 1: funcstr += "   " + paramname + ".sort();\n";
                break;
            case 2: funcstr += "   " + paramname + ".reverse();\n";
                break;
            case 3: funcstr += "   " + paramname + ".pop();\n";
                break;
            case 4: funcstr += "   " + paramname + ".concat(" + ag.randnumarr(20, ng.randnum(15)) + ");\n";
                break;
            case 5: funcstr += "   " + paramname + ".shift();\n";
                break;
            case 6: funcstr += "   " + paramname + ".concat(" + ag.randstrarr(8, ng.randnum(8)) + ");\n";
                break;
            case 7:
                break;
            default:
                break;
        }
        count+=1;
    }
    funcstr += "   return " + paramname;
    funcstr += "\n}";
    return funcstr;
};
//exports the machine
exports.ArrayMachine = ArrayMachine;