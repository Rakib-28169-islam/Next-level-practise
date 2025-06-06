"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { router as userRoutes } from './routes/userRoutes';
const todos_routes_1 = require("./routes/todos.routes");
const app = (0, express_1.default)();
const port = 3000;
// Middleware to parse JSON
app.use(express_1.default.json());
app.use('/todos', todos_routes_1.router);
// Simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
exports.default = app;
