var ng = require("./NameGenerator.js");
var ag = require("./ArrayGenerator.js");
var fg = require("./FuncGenerator.js");

var Funcmachine = (function () {
    function Funcmachine() {
        this.vardict = {};
        this.funcstring = fg.singlefuncline(ng.randname(6), ng.randname(6));
    }
    //resets the function string
    Funcmachine.prototype.ResetFstring = function() {
        this.funcstring = fg.singlefuncline(ng.randname(6), ng.randname(6));
    };

    Funcmachine.prototype.addvar = function (name, value) {
        this.vardict.name = value;
    };
    Funcmachine.prototype.getvar = function (name) {
        return this.vardict[name];
    };

    Funcmachine.prototype.createvar = function (type) {
        var varname = ng.randname(6);
        switch(type) {
            case "number": this.addvar(varname, ng.randnum(40));
                break;
            case "string": this.addvar(varname, ng.randname(8));
                break;
            case "numarray": this.addvar(varname, ag.randnumarr(35, ng.randnum(7)));
                break;
            case "strarray": this.addvar(varname, ag.randstrarr(6, ng.randnum(9)));
                break;
            default: throw "TypeError";
                break;
        }
    };
    return Funcmachine;
})();