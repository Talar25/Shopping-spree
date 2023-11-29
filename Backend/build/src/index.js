"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productService_1 = __importDefault(require("./services/productService"));
const utils_1 = __importDefault(require("./utils"));
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
app.use(express_1.default.static('dist'));
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send(productService_1.default.getProducts());
});
app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(productService_1.default.getOneProduct(id));
});
app.post('/', (req, res) => {
    try {
        const newProduct = (0, utils_1.default)(req.body);
        const addedPerson = productService_1.default.addProduct(newProduct);
        res.json(addedPerson);
    }
    catch (error) {
        let errorMsg = 'Something went wrong.';
        if (error instanceof Error) {
            errorMsg += ' Error: ' + error.message;
        }
        res.status(400).send(errorMsg);
    }
});
const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
