"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get("/", (req, res) => {
});
exports.router.get("/:id", (req, res) => {
    const userId = req.params.id;
    const query = req.query;
    res.send(`User with ID: ${userId}`);
});
