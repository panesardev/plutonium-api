import { Router, Request, Response } from "express";
import { featuredArticle } from "./featured-article";

const index = (request: Request, response: Response) => {
  response.json({
    featured: '/featured-article',
  });
}

const router = Router();

router.get('/', index);
router.get('/featured-article', featuredArticle);

export { router };

