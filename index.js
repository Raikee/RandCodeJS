#!/usr/bin/env node

var fs = require("fs");
var ng = require("./src/NameGenerator.js");
var arrwriter = require("./src/ArrayMachine.js");
var fname = process.argv[2];
var fcount = process.argv[3];

function makefunctions(count) {
    var filestring = "";
    for(var i=0;i<count;i++) filestring += arrwriter.ArrayMachine(6) + "\n\n";
    return filestring;
}

fs.writeFile(fname, makefunctions(parseInt(fcount)), function(err){
    if(err) throw err;
    console.log("Array Function file has been written");
});

