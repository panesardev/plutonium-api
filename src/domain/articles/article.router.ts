import { load } from 'cheerio';
import { Request, Response, Router } from 'express';
import { DOMAIN } from '../../constants';
import { FeaturedArticle } from './article.interface';

export namespace ArticleRouter {
  export const router = Router();

  router.get('/featured', async (request: Request, response: Response) => {
    const URL = `${DOMAIN}/articles/${process.env.FEATURED_SLUG}`;

    const res = await fetch(URL);
    const html = await res.text();
    const $ = load(html);

    function getMetatag(name: string): string {  
      return $(`meta[property="og:${name}"]`).attr('content') ||  
      $(`meta[name="twitter:${name}"]`).attr('content') ||
      $(`meta[name=${name}]`).attr('content');
    }

    const article: FeaturedArticle = {
      url: URL,
      title: getMetatag('title'),
      description: getMetatag('description'),
      coverUrl: `${DOMAIN}${getMetatag('image')}`,
      authorName: getMetatag('author-name'),
      authorLink: getMetatag('author-link'),
      authorImage: getMetatag('author-image'),
    }

    response.json(article);
  });
}