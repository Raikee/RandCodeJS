var ng = require("./NameGenerator.js");
var ag = require("./ArrayGenerator.js");
var fg = require("./FuncGenerator.js");
var sw = require("./StringWriter.js");

var Funcmachine = (function () {
    function Funcmachine() {
        this.vardict = {};
        this.funcstring = new sw.WritableString(fg.singlefuncline(ng.randname(6), ng.randname(6)), "\n@");
    }
    //resets the function string
    Funcmachine.prototype.ResetFstring = function() {
        this.funcstring = fg.singlefuncline(ng.randname(6), ng.randname(6));
    };
    Funcmachine.prototype.getFstring = function () {
        return this.funcstring;
    };
    //keeps track of variable types
    Funcmachine.prototype.addvar = function (name, type) {
        this.vardict.name = type;
    };
    Funcmachine.prototype.getvar = function (name) {
        return this.vardict[name];
    };
    //writes a line to the function string.
    Funcmachine.prototype.writeline = function (line) {
      this.funcstring.insert(line);
    };

    Funcmachine.prototype.createvar = function () {
        var varname = ng.randname(6);

    };
    return Funcmachine;
})();


var varstring = function(name, val) {
    var vstring = "var {name} = {val};"
    vstring = vstring.replace(/\{name\}/,name);
    vstring = vstring.replace(/\{val\}/, val);
    return vstring;
};