import { Router } from "express";
import { getAssetById, getAssets, getAssetHistory } from "./assets.controller";

const assetsRouter: Router = Router();

assetsRouter.get("/", getAssets);
assetsRouter.get("/:id", getAssetById);
assetsRouter.get("/:id/history", getAssetHistory);

export default assetsRouter;
