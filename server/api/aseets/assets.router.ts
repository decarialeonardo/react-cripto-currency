import { Router } from "express";
import { getAssetById, getAssets } from "./assets.controller";

const assetsRouter: Router = Router();

assetsRouter.get("/", getAssets);
assetsRouter.get("/:id", getAssetById);

export default assetsRouter;
