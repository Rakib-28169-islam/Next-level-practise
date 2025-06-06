import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://mongodb:12345@test.yzwhh.mongodb.net/todosDb?retryWrites=true&w=majority&appName=test";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export const todosCollection = client.db("todosDb").collection("todos");