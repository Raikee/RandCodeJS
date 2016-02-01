/**
 * Created by Josh on 1/31/16.
 */

//file that can generate forloops

var forstring = "for({init};{term};{increment})";

var createforstring = function(init, term, increment) {
    var temp = forstring.slice();
    temp = temp.replace(/\{init\}/, init);
    temp = temp.replace(/\{term\}/, term);
    temp = temp.replace(/\{increment\}/, increment);
    return temp;
};
//exports the forstring function
exports.createforstring = createforstring;