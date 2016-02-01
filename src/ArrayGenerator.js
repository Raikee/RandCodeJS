/**
 * Created by Josh on 1/31/16.
 */
var ng = require("./NameGenerator.js");
//file for generating random arrays of strings and numbers

//creates an array of random numbers
var randnumarr = function(max, length) {
    var arr = [];
    for(var i=0;i<length;i++) arr.push(Math.floor((Math.random() * max) + 1));
    return arr;
};

//creates an array of random strings
var randstrarr = function(max, length) {
    var arr = [];
    for(var i=0;i<length;i++) arr.push(ng.randname(max));
    return arr;
};

exports.randnumarr = randnumarr;
exports.randstrarr = randstrarr;


