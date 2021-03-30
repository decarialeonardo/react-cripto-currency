import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import assetsRouter from "./aseets/assets.router";
import candlesRouter from "./candles/candles.router";

const api: express.Application = express();

api.disable("x-powered-by");

// Enable CORS
api.use(cors());

// Enable request body parsing
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

api.use("/assets", assetsRouter);
api.use("/candles", candlesRouter);

export default api;
