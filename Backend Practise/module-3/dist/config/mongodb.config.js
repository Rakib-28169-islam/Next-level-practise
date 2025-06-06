"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosCollection = exports.client = void 0;
const mongodb_1 = require("mongodb");
const uri = "mongodb+srv://mongodb:12345@test.yzwhh.mongodb.net/todosDb?retryWrites=true&w=majority&appName=test";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
exports.client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
exports.todosCollection = exports.client.db("todosDb").collection("todos");
