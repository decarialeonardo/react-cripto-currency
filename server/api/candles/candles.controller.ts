import { NextFunction, Request, Response } from "express";
import { CandlesService } from "./candles.service";

const candlesService = new CandlesService();

export async function getCandles(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await candlesService.getCandles(
      req.query.exchange,
      req.query.interval,
      req.query.baseId,
      req.query.quoteId
    );
    return res.json(response.data);
  } catch (err) {
    next(new Error(`status: ${err.status} msg:${err.message}`));
  }
}
