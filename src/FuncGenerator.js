/**
 * Created by Josh on 2/1/16.
 */
    //for generating random func + variable names
var ng = require("./NameGenerator.js");
var flg = require("./ForloopGenerator.js");
var me = require("./Methods.js");

var returntypes = "array string number".split(" ");

var paramtypes = "array string number".split(" ");


var randselect = function(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
};

//object for storing parameter names and types, when writing functions
var paramdict = function() {
    this.params = {};
    this.addparam = function(name, type) {
        this.params.name = type;
    };
    this.checkparam = function (name) {
        return this.params.name;
    }
};

//creates a randomly named function with specified param and func name,
var singlefuncline = function(name, param) {
    var fline = "function {name}({param}) {";
    fline = fline.replace(/\{name\}/, name);
    fline = fline.replace(/\{param\}/, param);
    return fline;
};
exports.singlefuncline = singlefuncline;

