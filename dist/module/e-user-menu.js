"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoiceCart = exports.ChoiceSort = exports.ChoiceMenuUser = void 0;
var ChoiceMenuUser;
(function (ChoiceMenuUser) {
    ChoiceMenuUser[ChoiceMenuUser["SHOWALLPRODUCT"] = 1] = "SHOWALLPRODUCT";
    ChoiceMenuUser[ChoiceMenuUser["FILTERPRODUCTSBYPRICE"] = 2] = "FILTERPRODUCTSBYPRICE";
    ChoiceMenuUser[ChoiceMenuUser["SEARCHPRODUCTSBYNAME"] = 3] = "SEARCHPRODUCTSBYNAME";
    ChoiceMenuUser[ChoiceMenuUser["SORTPRODUCTSBYPRICE"] = 4] = "SORTPRODUCTSBYPRICE";
    ChoiceMenuUser[ChoiceMenuUser["CART"] = 5] = "CART";
    ChoiceMenuUser[ChoiceMenuUser["SHOWNUMBEROFPRODUCTSBYCATEGORY"] = 6] = "SHOWNUMBEROFPRODUCTSBYCATEGORY";
    ChoiceMenuUser[ChoiceMenuUser["SHOWHOSTSELLINGPRODUCT"] = 7] = "SHOWHOSTSELLINGPRODUCT";
})(ChoiceMenuUser = exports.ChoiceMenuUser || (exports.ChoiceMenuUser = {}));
var ChoiceSort;
(function (ChoiceSort) {
    ChoiceSort[ChoiceSort["SORTUP"] = 1] = "SORTUP";
    ChoiceSort[ChoiceSort["SORTDOWN"] = 2] = "SORTDOWN";
})(ChoiceSort = exports.ChoiceSort || (exports.ChoiceSort = {}));
var ChoiceCart;
(function (ChoiceCart) {
    ChoiceCart[ChoiceCart["SHOWALLPRODUCTINCART"] = 1] = "SHOWALLPRODUCTINCART";
    ChoiceCart[ChoiceCart["UPDATEAMOUNT"] = 2] = "UPDATEAMOUNT";
    ChoiceCart[ChoiceCart["REMOVEPRODUCTFROMCART"] = 3] = "REMOVEPRODUCTFROMCART";
    ChoiceCart[ChoiceCart["PAY"] = 4] = "PAY";
})(ChoiceCart = exports.ChoiceCart || (exports.ChoiceCart = {}));
