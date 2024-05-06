import compression from 'compression';
import express from 'express';
import cors from 'cors';
import { ArticleController } from './domain/articles/article.controller';
import { AuthController } from './domain/auth/auth.controller';

require('dotenv').config();

export default class App {
  private static instance: App;
  private express = express();

  static getInstance(): App {
    if (!App.instance) App.instance = new App();
    return App.instance;
  }

  run(port: number) {
    this.getExpress().listen(port, () =>
      console.log(`Express running at PORT:${port}`),
    );
  }

  private useControllers() {
    this.express.use('/articles', ArticleController.router);
    this.express.use('/auth', AuthController.router);
  }

  getExpress() {
    this.express.use(compression());
    this.express.use(express.json());
    this.express.use(cors());

    this.useControllers();

    return this.express;
  }

}
