import compression from 'compression';
import cors from 'cors';
import express from 'express';
import { AuthRouter } from './auth/auth.router';
import { ArticleRouter } from './domains/articles/article.router';
import { logger } from './middlewares/logger';

export class App {
  private server = express();

  getExpress() {
    this.server.use(compression());
    this.server.use(cors());
    this.server.use(express.json());
    
    this.server.use(logger);
    
    this.server.use('/auth', AuthRouter.router);
    this.server.use('/articles', ArticleRouter.router);

    return this.server;
  }

  run(port: number) {
    const server = this.getExpress();
    server.listen(port, () => console.log(`Server running at PORT:${port}`));
  }
}