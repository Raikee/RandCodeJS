//file for randomly generating variable names

var namefrags = {
    "con": "bcdfghjklmnpqrstvwxz".split(""),
    "vow": "aeiou".split("")
};


//gets a random number between 1 and n
var randnum = function(n) {
    return Math.floor((Math.random() * n) + 1);
};
exports.randnum = randnum;
//randomly selects an array element
var randselect = function(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
};
exports.randselect = randselect;
//randomly picks value from object
var randkeyval = function(obj) {
    var select = Object.keys(obj);
    return obj[randselect(select)];
};
//generates easy to read random variable name
var randname = function(length) {
    var name = "";
    while (name.length<length) {
        var syllen = Math.floor((Math.random() * 3) + 2);
        name += randselect(namefrags.con);
        var randvow = randselect(namefrags.vow);
        if(syllen>2) name += randvow + randvow;
        else name += randvow;
    }
    return name;
};

//exports random var func
exports.randname = randname;
