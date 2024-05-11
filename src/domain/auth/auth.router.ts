import { Request, Response, Router } from "express";

export namespace AuthRouter {
  export const router = Router();

  router.get('/is-admin/:email', (request: Request, response: Response) => {
    response.json({ 
      isAdmin: process.env['ADMIN'] === request.params.email,
    });
  });
}
