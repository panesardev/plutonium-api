import express, { Express } from 'express';
import cors from 'cors';
import compression from 'compression';
import { ArticleRouter } from './domain/articles/article.router';
import { AuthRouter } from './domain/auth/auth.router';

require('dotenv').config();

export function getServer(): Express {
  const server = express();
  
  server.use(compression());
  server.use(cors());
  server.use(express.json());

  server.use('/articles', ArticleRouter.router);
  server.use('/auth', AuthRouter.router);

  return server;
}
