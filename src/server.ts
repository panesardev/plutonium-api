import compression from 'compression';
import cors from 'cors';
import express, { Express } from 'express';
import { ArticleRouter } from './domain/articles/article.router';
import { AuthRouter } from './domain/auth/auth.router';
import { logger } from './logger';

require('dotenv').config();

export function getServer(): Express {
  const server = express();
  
  server.use(compression());
  server.use(cors());
  server.use(express.json());

  server.use(logger);

  server.use('/articles', ArticleRouter.router);
  server.use('/auth', AuthRouter.router);

  return server;
}
