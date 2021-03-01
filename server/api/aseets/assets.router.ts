import { Router } from "express";
import { getAssets } from "./assets.controller";

const assetsRouter: Router = Router();

assetsRouter.get("/", getAssets);

export default assetsRouter;
