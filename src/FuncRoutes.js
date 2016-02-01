/**
 * Created by Josh on 2/1/16.
 */

//this file contains an obj to judge the routes to which a function statement is writable, such as choosing between
//assignment, forloop, if statement, etc. It acts like a tree

var funcroute = {
    "newvar":[
        "string",
        "array",
        "number"
    ],
    "addtovar":{
        "string":[
            ".concat({arg})",
            "+= {arg}"
        ],
        "array":[
            ".push({arg})",
            ".unshift({arg})"
        ],
        "number":[
            "+= {arg}",
            "*= {arg}"
        ]
    },
    "removefromvar":{
        "string":[]
    }

};

exports.funcroute = funcroute;