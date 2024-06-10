import { RequestHandler } from "express";

export function logger(): RequestHandler {
  return (request, response, next) => {
    console.log(`[${request.method}] ${request.url}`);
    next();
  }
}
