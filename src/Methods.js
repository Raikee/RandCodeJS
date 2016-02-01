/**
 * Created by Josh on 2/1/16.
 */
    //file that carries different math, string and array methods the can be picked for writing random functions

//list of string methods, where {arg} is a template spot for an argument
var smethods = ".split({arg}) .slice({arg}) .indexOf({arg}) .charAt({arg}) .search({arg}) .substring({arg}) .toUpperCase() .concat({arg})".split(" ");

exports.smethods = smethods;
var amethods = ".toString() .pop() .push({arg}) .shift() .unshift({arg}) .sort() .reverse() .concat({arg})".split(" ");

exports.amethods = amethods;
var mathmethods = "Math.random() Math.floor(Math.random() * {arg}) Math.PI Math.E Math.abs({arg}) Math.sqrt({arg})".split(" ");

exports.mathmethods = mathmethods;