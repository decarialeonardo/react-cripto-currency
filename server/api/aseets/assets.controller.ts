import { NextFunction, Request, Response } from "express";
import { AssetsService } from "./assets.service";

const assetsService = new AssetsService();

export async function getAssets(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await assetsService.getAssets();
    return res.json(response.data);
  } catch (err) {
    next(new Error(`status: ${err.status} msg:${err.message}`));
  }
}
