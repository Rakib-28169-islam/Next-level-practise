import { todosCollection } from './../config/mongodb.config';
import { Router } from "express";

export const router = Router();

router.get("/create-todo", async(req, res) => {
  const { title, body, priority, status } = req.body;
  await todosCollection.insertOne({
    title,
    body,
    priority,
    status: status || "pending",
    createdAt: new Date(),
   })
   const todos = await todosCollection.find({}).toArray();
   res.send(todos);

});
router.get("/", async (req, res) => {
  const todos =await todosCollection.find({}).toArray();
  res.json({
    message: "Todos route is working",
    todos
  });
});
