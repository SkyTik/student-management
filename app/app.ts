import express, { NextFunction, Request, Response, json } from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import logger from './config/logger';

const app = express();
app.use(json());
app.use(compression());
app.use(cors());
app.use(helmet());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err);
  res.status(500).json({ message: 'Something went wrong' });
});

export default app;
