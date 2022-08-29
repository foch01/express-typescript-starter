import { Request, Response } from "express";

/**
 * Home page.
 * @route GET /
 */
export const welcome = (req: Request, res: Response) => {
  res.send('Hello World !')
};
