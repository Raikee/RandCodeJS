/**
 * Created by Josh on 2/1/16.
 */

//this file contains an obj to judge the routes to which a function statement is writable, such as choosing between
//assignment, forloop, if statement, etc. It acts like a tree

var funcroute = {
    "createvar":[
        "string",
        "numarr",
        "strarr",
        "number"
    ],
    "changevar":{},
    "forloop":{
        "number":{},

    },
    "whileloop":{},
    "if":{}
};

exports.funcroute = funcroute;