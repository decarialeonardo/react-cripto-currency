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

export async function getAssetById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await assetsService.getAssetById(req.params.id);
    return res.json(response.data);
  } catch (err) {
    next(new Error(`status: ${err.status} msg:${err.message}`));
  }
}

export async function getAssetHistory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await assetsService.getAssetHistory(
      req.params.id,
      req.query.interval
    );
    return res.json(response.data);
  } catch (err) {
    next(new Error(`status: ${err.status} msg:${err.message}`));
  }
}
