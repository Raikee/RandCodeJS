/**
 * Created by Josh on 2/2/16.
 */

//file that implements a string writer, a version of writable strings.

//based on symbol @ for appending in strings.
//symbol CANNOT repeat.


    //object for singlet writing
var WritableString = function (main, sym) {
    if(main.search(sym)==-1) throw "SymError";
    this.main = main;
    this.sym = sym;
    this.insert = function(string) {
        string += this.sym;
        this.main = this.main.replace(this.sym, string);
    }
};
