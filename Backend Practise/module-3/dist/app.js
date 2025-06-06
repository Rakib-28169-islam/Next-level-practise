"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const app = (0, express_1.default)();
const port = 3000;
// Middleware to parse JSON
app.use(express_1.default.json());
app.use('/users', userRoutes_1.router);
// Simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
exports.default = app;
