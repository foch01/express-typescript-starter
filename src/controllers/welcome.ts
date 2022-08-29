import { Request, Response } from "express";
import CookieService from '../services/cookie.service';
const puppeteer = require('puppeteer');

/**
 * Home page.
 * @route GET /
 */
export const welcome = async(req: Request, res: Response) => {
  res.send('hello world!');
};

/**
 * Cookie.
 * @route GET /
 */
export const cookie = async(req: Request, res: Response) => {
    const cookie = await CookieService.findLast()
    const cookieArr = cookie[0].text;
    const cookieToJSON = JSON.parse(cookieArr.replace(/\s/g,''))
    res.json(cookieToJSON)
};
