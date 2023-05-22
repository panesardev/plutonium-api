import { Request, Response } from 'express';
import { load } from 'cheerio';
import { FeaturedArticle } from '../interfaces/article';

const FEATURED_ARTICLE_SLUG = 'integrating-firebase-into-angular';

export async function featuredArticle(request: Request, response: Response) {
	const url = `https://plutonium-dev.uc.r.appspot.com/articles/${FEATURED_ARTICLE_SLUG}`;

	let res = await fetch(url);
	let html = await res.text();
	
	let $ = load(html);

	const getMetaTag = (name: string) =>  
		$(`meta[property="og:${name}"]`).attr('content') ||  
		$(`meta[name="twitter:${name}"]`).attr('content') ||
		$(`meta[name=${name}]`).attr('content');

	const article: FeaturedArticle = {
		url,
		title: getMetaTag('title'),
		description: getMetaTag('description'),
		coverUrl: getMetaTag('image'),
		authorName: getMetaTag('author-name'),
		authorLink: getMetaTag('author-link'),
		authorImage: getMetaTag('author-image'),
	}

	response.json(article);
}
