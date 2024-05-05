import { Request, Response, Router } from "express";

export namespace AuthController {
  export const router = Router();

  router.get('/is-admin/:email', async (request: Request, response: Response) => {
    const email = request.params.email;
    const isAdmin = process.env['ADMIN'] === email;
    response.json({ isAdmin });
  });
}