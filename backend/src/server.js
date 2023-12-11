import express from 'express';
import { rootRouter } from './routers/rootRouter';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use('/', rootRouter);
