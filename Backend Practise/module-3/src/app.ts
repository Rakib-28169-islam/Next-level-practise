import express, { Application, Request, Response } from 'express';
import { router as userRoutes } from './routes/userRoutes';
const app: Application = express();
const port = 3000;
// Middleware to parse JSON
app.use(express.json());
app.use('/users', userRoutes);



// Simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

export default app;