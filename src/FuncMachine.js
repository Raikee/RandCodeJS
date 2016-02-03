var ng = require("./NameGenerator.js");
var ag = require("./ArrayGenerator.js");

var Funcmachine = (function () {
    function Funcmachine() {
        this.vardict = {};
        this.funcstring = "";
    }

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