import { Request, Response } from 'express';
import { load } from 'cheerio';
import { FeaturedArticle } from '../types/article';
import { constants } from '../constants';

const URL = `${constants.domain}/articles/${constants.featuredArticleSlug}`;

export async function featuredArticle(request: Request, response: Response) {
	let res = await fetch(URL);
	let html = await res.text();
	
	let $ = load(html);

	const getMetaTag = (name: string) =>  
		$(`meta[property="og:${name}"]`).attr('content') ||  
		$(`meta[name="twitter:${name}"]`).attr('content') ||
		$(`meta[name=${name}]`).attr('content');

	const article: FeaturedArticle = {
		url: URL,
		title: getMetaTag('title'),
		description: getMetaTag('description'),
		coverUrl: getMetaTag('image'),
		authorName: getMetaTag('author-name'),
		authorLink: getMetaTag('author-link'),
		authorImage: getMetaTag('author-image'),
	}

	response.json(article);
}
