import express from 'express'
import * as welcomeController from "./controllers/welcome";

const app = express();

app.get('/', welcomeController.welcome);

export default app;
