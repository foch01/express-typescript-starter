import express from 'express'
const puppeteer = require('puppeteer');
import * as welcomeController from "./controllers/welcome";
import CookieService from './services/cookie.service';
const cron = require('node-cron');

const app = express();

const task = cron.schedule("* 0 * * * *", async () =>  {
    console.log('start')
    await getCookiesFromApi();
}, {
    scheduled: false
});

task.start();

async function getCookiesFromApi(): Promise<void> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://note-pad.net/ru/read/e74b79888eb748dbf06f5f6f1b0b9c1f?page=1', { waitUntil: "domcontentloaded" });
    await page.waitForSelector('#page_text_ifr');
    const elementHandle = await page.$('#page_text_ifr');
    const frame = await elementHandle.contentFrame();
    const text = await frame.$eval('#tinymce > p', (element: Element) => element.textContent);
    await CookieService.createOneCustom(text);

    await browser.close();
}

app.get('/', welcomeController.welcome);
app.get('/cookie', welcomeController.cookie);

export default app;
