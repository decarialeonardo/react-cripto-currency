import { Router } from "express";
import { getAssets } from "../controllers/assets-ctrl";

const assetsRouter: Router = Router();

assetsRouter.get("/assets", getAssets);

export default assetsRouter;
