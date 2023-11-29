"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const toNewProduct = (object) => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }
    if ('name' in object &&
        'type' in object &&
        'gender' in object &&
        'description' in object &&
        'price' in object &&
        'color' in object &&
        'size' in object) {
        const newProduct = {
            name: parseName(object.name),
            type: parseType(object.type),
            gender: parseGender(object.gender),
            description: parseName(object.description),
            price: parseName(object.price),
            color: [],
            size: [],
        };
        return newProduct;
    }
    throw new Error('Incorrect data: some fields are missing');
};
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const parseName = (name) => {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing name');
    }
    return name;
};
const isGender = (gender) => {
    return Object.values(types_1.Gender)
        .map((a) => a.toString())
        .includes(gender);
};
const parseGender = (gender) => {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing gender');
    }
    return gender;
};
const isType = (type) => {
    return Object.values(types_1.ClothType)
        .map((a) => a.toString())
        .includes(type);
};
const parseType = (type) => {
    if (!type || !isString(type) || !isType(type)) {
        throw new Error('Incorrect or missing cloth type');
    }
    return type;
};
exports.default = toNewProduct;
