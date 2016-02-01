//file for unit tests

var Unittest = (function () {
    function Unittest() {
    }

    Unittest.AssertEqual = function (elem1, elem2) {
        return elem1 == elem2;
    };

    Unittest.AssertTrue = function (elem) {
        return elem ? true:false;
    };
    return Unittest;
})();