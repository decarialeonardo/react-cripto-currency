import { Router } from "express";
import { getCandles } from "./candles.controller";

const candlesRouter: Router = Router();

candlesRouter.get("/", getCandles);

export default candlesRouter;
