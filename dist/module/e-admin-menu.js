"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductChoice = exports.CategoryChoice = void 0;
var CategoryChoice;
(function (CategoryChoice) {
    CategoryChoice[CategoryChoice["SHOWALLCATEGORY"] = 1] = "SHOWALLCATEGORY";
    CategoryChoice[CategoryChoice["CREATECATEGORY"] = 2] = "CREATECATEGORY";
    CategoryChoice[CategoryChoice["UPDATECATEGORY"] = 3] = "UPDATECATEGORY";
    CategoryChoice[CategoryChoice["REMOVECATEGORY"] = 4] = "REMOVECATEGORY";
    CategoryChoice[CategoryChoice["SHOWPRODUCTBYCATEGORY"] = 5] = "SHOWPRODUCTBYCATEGORY";
})(CategoryChoice = exports.CategoryChoice || (exports.CategoryChoice = {}));
var ProductChoice;
(function (ProductChoice) {
    ProductChoice[ProductChoice["SHOWALLPRODUCT"] = 1] = "SHOWALLPRODUCT";
    ProductChoice[ProductChoice["CREATEPRODUCT"] = 2] = "CREATEPRODUCT";
    ProductChoice[ProductChoice["UPDATEPRODUCT"] = 3] = "UPDATEPRODUCT";
    ProductChoice[ProductChoice["REMOVEPRODUCT"] = 4] = "REMOVEPRODUCT";
    ProductChoice[ProductChoice["SEARCHPRODUCTBYNAME"] = 5] = "SEARCHPRODUCTBYNAME";
    ProductChoice[ProductChoice["SORTBYPRICE"] = 6] = "SORTBYPRICE";
    ProductChoice[ProductChoice["ADDPRODUCTTOCATEGORY"] = 7] = "ADDPRODUCTTOCATEGORY";
})(ProductChoice = exports.ProductChoice || (exports.ProductChoice = {}));
