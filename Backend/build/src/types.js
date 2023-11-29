"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = exports.Size = exports.ClothType = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
})(Gender || (exports.Gender = Gender = {}));
var ClothType;
(function (ClothType) {
    ClothType["Jacket"] = "jacket";
    ClothType["Tshirt"] = "tshirt";
    ClothType["Sweatshirt"] = "sweatshirt";
    ClothType["Trousers"] = "trousers";
})(ClothType || (exports.ClothType = ClothType = {}));
var Size;
(function (Size) {
    Size["XS"] = "xs";
    Size["S"] = "s";
    Size["M"] = "m";
    Size["L"] = "l";
    Size["XL"] = "xl";
    Size["XXL"] = "xxl";
})(Size || (exports.Size = Size = {}));
var Color;
(function (Color) {
    Color["BLACK"] = "black";
    Color["WHITE"] = "white";
    Color["GREEN"] = "green";
    Color["BLUE"] = "blue";
    Color["YELLOW"] = "yellow";
    Color["RED"] = "red";
    Color["GREY"] = "grey";
    Color["BROWN"] = "brown";
})(Color || (exports.Color = Color = {}));
