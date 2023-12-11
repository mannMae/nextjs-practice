import express from 'express';
import { test } from '../controllers/testController';

export const rootRouter = express.Router();

rootRouter.get('/', test);
