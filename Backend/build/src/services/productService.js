"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("../../data/products"));
const uuid_1 = require("uuid");
const getProducts = () => {
    return products_1.default;
};
const getLength = () => {
    return products_1.default.length;
};
const getOneProduct = (id) => {
    const product = products_1.default.find((product) => product.id === id);
    return product;
};
const addProduct = (product) => {
    const newProduct = Object.assign({ id: (0, uuid_1.v1)() }, product);
    products_1.default.push(newProduct);
    return newProduct;
};
exports.default = {
    getOneProduct,
    getProducts,
    addProduct,
    getLength,
};
