"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const mongodb_config_1 = require("./../config/mongodb.config");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, body, priority, status } = req.body;
    yield mongodb_config_1.todosCollection.insertOne({
        title,
        body,
        priority,
        status: status || "pending",
        createdAt: new Date(),
    });
    const todos = yield mongodb_config_1.todosCollection.find({}).toArray();
    res.send(todos);
}));
exports.router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield mongodb_config_1.todosCollection.find({}).toArray();
    res.json({
        message: "Todos route is working",
        todos
    });
}));
