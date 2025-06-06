import express, { Application, Request, Response } from 'express';
// import { router as userRoutes } from './routes/userRoutes';
import { router as todosRoutes } from './routes/todos.routes';
const app: Application = express();
const port = 3000;
// Middleware to parse JSON
app.use(express.json());
app.use('/todos', todosRoutes);



// Simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

export default app;