import { NextFunction, Request, Response } from "express";

export const logger = (request: Request, response: Response, next: NextFunction) => {
  console.log('--------------------');
  console.log(`[${request.method}] ${request.url}`);
  // console.log('REQUEST PARAMS', request.params);
  console.log('REQUEST BODY', request.body);
  // console.log('REQUEST HEADERS', request.headers);
  next();
}
