import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import usersRouter from './routes/users';
import healthCheckRouter from './routes/healthcheck';
import notesRouter from './routes/notes';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.sendStatus(500);
});

app.use('/', usersRouter);
app.use('/notes', notesRouter);
app.use('/healthcheck', healthCheckRouter);

export { app };
