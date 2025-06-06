import { todosCollection } from './../config/mongodb.config';
import { Router } from "express";

export const router = Router();

router.get("/create-todo", async(req, res) => {
  await todosCollection.insertOne({
    title:"Learn Node.js",
    body:"Learn Node.js with Express and MongoDB",
    priority: "High",
    status: "Pending",
    createdAt: new Date() 
   })
   const todos = await todosCollection.find({}).toArray();
   res.send(todos);

});
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  const query = req.query;
  res.send(`User with ID: ${userId}`);
});
