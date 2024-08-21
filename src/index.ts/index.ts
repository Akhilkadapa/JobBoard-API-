import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Job Board API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
